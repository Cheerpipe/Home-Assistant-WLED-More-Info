"""Fixtures of the WLED More-Info tests."""

from __future__ import annotations

from collections.abc import Generator
from types import SimpleNamespace
from typing import Any
from unittest.mock import AsyncMock, patch

from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.wled_more_info.const import DOMAIN

MAC = "48e729941908"

FXDATA = ["", "!,!;!,!;!;01"]
STATE = {
    "on": True,
    "seg": [
        {"id": 0, "col": [[255, 0, 0], [0, 0, 255], [0, 0, 0]], "fx": 1, "pal": 2},
        {"id": 1, "col": [[0, 255, 0], [0, 0, 0], [0, 0, 0]], "fx": 0, "pal": 0},
    ],
}


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations: None) -> None:
    """Load the integration from custom_components/."""


def _device_answer(uri: str, method: str = "GET", data: Any = None, **kwargs: Any):
    if uri == "/json/info":
        return {"ver": "14.7.3"}
    if uri == "/json/eff":
        return ["Solid", "Blink"]
    if uri == "/json/fxdata":
        return FXDATA
    if uri == "/json/pal":
        return ["Default", "* Random Cycle", "Party"]
    if uri == "/json/palx":
        page = kwargs["params"]["page"]
        return {"m": 1, "p": {str(page): [[0, 255, 0, 0]]}}
    if uri == "/json/state":
        return STATE
    raise AssertionError(f"Unexpected request {uri}")


@pytest.fixture
def wled_client() -> AsyncMock:
    """The WLED integration's client of the device."""
    client = AsyncMock()
    client.request = AsyncMock(side_effect=_device_answer)
    return client


@pytest.fixture
def wled_entry(hass: HomeAssistant, wled_client: AsyncMock) -> MockConfigEntry:
    """A loaded WLED device with a main light and two segment lights."""
    entry = MockConfigEntry(
        domain="wled",
        unique_id=MAC,
        data={"host": "192.168.3.17"},
        state=ConfigEntryState.LOADED,
    )
    entry.add_to_hass(hass)
    entry.runtime_data = SimpleNamespace(
        wled=wled_client,
        data=SimpleNamespace(info=SimpleNamespace(version="14.7.3", build="2505")),
        async_request_refresh=AsyncMock(),
    )
    registry = er.async_get(hass)
    for unique_id, object_id in (
        (MAC, "wled_main"),
        (f"{MAC}_0", "wled"),
        (f"{MAC}_1", "wled_segment_1"),
    ):
        registry.async_get_or_create(
            "light",
            "wled",
            unique_id,
            suggested_object_id=object_id,
            config_entry=entry,
        )
    return entry


@pytest.fixture
def extra_js() -> Generator[set[str]]:
    """URLs added to every page (stands in for the frontend)."""
    urls: set[str] = set()
    with (
        patch(
            "custom_components.wled_more_info.add_extra_js_url",
            side_effect=lambda hass, url: urls.add(url),
        ),
        patch(
            "custom_components.wled_more_info.remove_extra_js_url",
            side_effect=lambda hass, url: urls.discard(url),
        ),
    ):
        yield urls


@pytest.fixture
async def integration(hass: HomeAssistant, extra_js: set[str]) -> MockConfigEntry:
    """WLED More-Info set up; frontend and WLED are stood in for."""
    hass.config.components.update({"frontend", "wled"})
    assert await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, title="WLED More-Info")
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry
