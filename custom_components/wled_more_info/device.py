"""Access to the WLED devices of Home Assistant's WLED integration.

A light is resolved to the WLED config entry that provides it and to its
segment (from its unique id, like the WLED integration builds it:
`<mac>_<segment>` for a segment light, the bare `<mac>` for the main light).
Requests go through the integration's own client (`coordinator.wled`), so
there is no address to configure and no other host can be reached.
"""

from __future__ import annotations

import asyncio
from dataclasses import dataclass
import re
import time
from typing import TYPE_CHECKING, Any

from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.storage import Store

from .const import STATE_MAX_AGE, STORAGE_KEY, STORAGE_VERSION

if TYPE_CHECKING:
    from homeassistant.components.wled.coordinator import WLEDDataUpdateCoordinator

WLED_DOMAIN = "wled"

_SEGMENT_UNIQUE_ID = re.compile(r"^(.+)_(\d+)$")


class LightNotFound(LookupError):
    """The entity isn't a light of a loaded WLED device."""


class NotASegment(LookupError):
    """The main light of a multi-segment device has no segment to change."""


@dataclass(frozen=True)
class WledLight:
    """A WLED light and the device that provides it."""

    entity_id: str
    entry_id: str
    device_key: str
    segment: int | None
    coordinator: WLEDDataUpdateCoordinator


def parse_segment(unique_id: str) -> int | None:
    """Segment of a light's unique id; None for the main light."""
    match = _SEGMENT_UNIQUE_ID.match(unique_id)
    return int(match.group(2)) if match else None


def resolve_light(hass: HomeAssistant, entity_id: str) -> WledLight:
    """The WLED device of a light, or LightNotFound."""
    entry = er.async_get(hass).async_get(entity_id)
    if (
        entry is None
        or entry.platform != WLED_DOMAIN
        or entry.domain != "light"
        or entry.config_entry_id is None
    ):
        raise LightNotFound(f"{entity_id} is not a WLED light")
    config_entry = hass.config_entries.async_get_entry(entry.config_entry_id)
    if config_entry is None or config_entry.state is not ConfigEntryState.LOADED:
        raise LightNotFound(f"The WLED device of {entity_id} is not loaded")
    return WledLight(
        entity_id=entity_id,
        entry_id=config_entry.entry_id,
        device_key=config_entry.unique_id or config_entry.entry_id,
        segment=parse_segment(entry.unique_id),
        coordinator=config_entry.runtime_data,
    )


def _firmware(light: WledLight) -> str:
    info = getattr(light.coordinator.data, "info", None)
    version = getattr(info, "version", None)
    build = getattr(info, "build", None)
    return f"{version}+{build}"


class WledProxy:
    """Reads and writes WLED devices for the card, with caches."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Create the proxy; the catalog cache loads on first use."""
        self._store: Store[dict[str, Any]] = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._catalogs: dict[str, Any] | None = None
        self._catalog_locks: dict[str, asyncio.Lock] = {}
        self._states: dict[str, tuple[float, dict[str, Any]]] = {}
        self._state_tasks: dict[str, asyncio.Task[dict[str, Any]]] = {}

    async def catalog(self, light: WledLight) -> dict[str, Any]:
        """Effects, their metadata and the palettes with their previews.

        They only change with the firmware, so they are read once per device
        and firmware build, then kept in memory and on disk.
        """
        if self._catalogs is None:
            self._catalogs = await self._store.async_load() or {}
        key = light.device_key
        firmware = _firmware(light)
        lock = self._catalog_locks.setdefault(key, asyncio.Lock())
        async with lock:
            cached = self._catalogs.get(key)
            if cached and cached.get("firmware") == firmware:
                return cached["catalog"]
            catalog = await self._fetch_catalog(light)
            self._catalogs[key] = {"firmware": firmware, "catalog": catalog}
            await self._store.async_save(self._catalogs)
            return catalog

    @staticmethod
    async def _fetch_catalog(light: WledLight) -> dict[str, Any]:
        wled = light.coordinator.wled
        # One request at a time: these are small devices.
        info = await wled.request("/json/info")
        effect_names = await wled.request("/json/eff")
        fxdata = await wled.request("/json/fxdata")
        palette_names = await wled.request("/json/pal")
        palx: dict[str, Any] = {}
        page, pages = 0, 0
        while page <= pages:
            result = await wled.request("/json/palx", params={"page": page})
            pages = int(result.get("m", 0))
            palx.update(result.get("p", {}))
            page += 1
        return {
            "version": info.get("ver", ""),
            "effectNames": effect_names,
            "fxdata": fxdata,
            "paletteNames": palette_names,
            "palx": palx,
        }

    async def state(self, light: WledLight) -> dict[str, Any]:
        """The device's segments; one request serves every card of it."""
        key = light.entry_id
        cached = self._states.get(key)
        if cached and time.monotonic() - cached[0] < STATE_MAX_AGE:
            return cached[1]
        task = self._state_tasks.get(key)
        if task is None:
            task = asyncio.ensure_future(self._fetch_state(light))
            self._state_tasks[key] = task
            task.add_done_callback(lambda _: self._state_tasks.pop(key, None))
        return await asyncio.shield(task)

    async def _fetch_state(self, light: WledLight) -> dict[str, Any]:
        state = await light.coordinator.wled.request("/json/state")
        result = {"seg": state.get("seg", [])}
        self._states[light.entry_id] = (time.monotonic(), result)
        return result

    async def set_segment(
        self, light: WledLight, data: dict[str, Any]
    ) -> dict[str, Any]:
        """Changes the light's own segment and returns the new segments."""
        if light.segment is None:
            raise NotASegment(f"{light.entity_id} is not a segment light")
        state = await light.coordinator.wled.request(
            "/json/state",
            method="POST",
            data={"seg": [{**data, "id": light.segment}], "v": True},
        )
        result = {"seg": state.get("seg", [])}
        self._states[light.entry_id] = (time.monotonic(), result)
        # Entities follow (colors, effect, palette) on the next update.
        await light.coordinator.async_request_refresh()
        return result
