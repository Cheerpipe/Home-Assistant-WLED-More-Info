"""Websocket commands of the WLED card.

Every command takes the `entity_id` of a WLED light, never an address: the
device is the one Home Assistant's WLED integration already talks to. Reads
need permission to read the light, writes permission to control it.
"""

from __future__ import annotations

from collections.abc import Awaitable, Callable
from functools import wraps
from typing import Any

from homeassistant.auth.permissions.const import POLICY_CONTROL, POLICY_READ
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import Unauthorized
from homeassistant.helpers import config_validation as cv
import voluptuous as vol

from wled import WLEDError

from .const import DOMAIN
from .device import LightNotFound, NotASegment, WledLight, WledProxy, resolve_light

_BYTE = vol.All(vol.Coerce(int), vol.Range(min=0, max=255))
_COLOR = vol.All([_BYTE], vol.Length(max=4))

# The segment fields the card changes (WLED's JSON API names).
SEGMENT_DATA = vol.Schema(
    {
        vol.Optional("col"): vol.All([_COLOR], vol.Length(max=3)),
        vol.Optional("fx"): _BYTE,
        vol.Optional("pal"): _BYTE,
        vol.Optional("sx"): _BYTE,
        vol.Optional("ix"): _BYTE,
        vol.Optional("c1"): _BYTE,
        vol.Optional("c2"): _BYTE,
        vol.Optional("c3"): vol.All(vol.Coerce(int), vol.Range(min=0, max=31)),
        vol.Optional("o1"): cv.boolean,
        vol.Optional("o2"): cv.boolean,
        vol.Optional("o3"): cv.boolean,
    }
)

type Handler = Callable[
    [HomeAssistant, websocket_api.ActiveConnection, dict[str, Any], WledLight],
    Awaitable[Any],
]


def _light_command(policy: str) -> Callable[[Handler], Any]:
    """Resolves the light, checks the user's permission, maps errors."""

    def decorator(handler: Handler) -> Any:
        @websocket_api.async_response
        @wraps(handler)
        async def wrapper(
            hass: HomeAssistant,
            connection: websocket_api.ActiveConnection,
            msg: dict[str, Any],
        ) -> None:
            entity_id = msg["entity_id"]
            if not connection.user.permissions.check_entity(entity_id, policy):
                raise Unauthorized(entity_id=entity_id, permission=policy)
            try:
                light = resolve_light(hass, entity_id)
                result = await handler(hass, connection, msg, light)
            except (LightNotFound, NotASegment) as err:
                connection.send_error(msg["id"], "not_found", str(err))
                return
            except (WLEDError, TimeoutError) as err:
                connection.send_error(
                    msg["id"], "device_error", f"WLED did not answer: {err}"
                )
                return
            connection.send_result(msg["id"], result)

        return wrapper

    return decorator


def _proxy(hass: HomeAssistant) -> WledProxy:
    return hass.data[DOMAIN]


@websocket_api.websocket_command(
    {vol.Required("type"): f"{DOMAIN}/catalog", vol.Required("entity_id"): cv.entity_id}
)
@_light_command(POLICY_READ)
async def ws_catalog(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    light: WledLight,
) -> dict[str, Any]:
    """Effects, effect metadata and palettes of the light's device."""
    return await _proxy(hass).catalog(light)


@websocket_api.websocket_command(
    {vol.Required("type"): f"{DOMAIN}/state", vol.Required("entity_id"): cv.entity_id}
)
@_light_command(POLICY_READ)
async def ws_state(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    light: WledLight,
) -> dict[str, Any]:
    """Segments of the light's device (colors HA doesn't report)."""
    return await _proxy(hass).state(light)


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/set_segment",
        vol.Required("entity_id"): cv.entity_id,
        vol.Required("data"): SEGMENT_DATA,
    }
)
@_light_command(POLICY_CONTROL)
async def ws_set_segment(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
    light: WledLight,
) -> dict[str, Any]:
    """Changes the light's segment (colors, palette, effect and its options)."""
    return await _proxy(hass).set_segment(light, msg["data"])


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register the card's commands."""
    websocket_api.async_register_command(hass, ws_catalog)
    websocket_api.async_register_command(hass, ws_state)
    websocket_api.async_register_command(hass, ws_set_segment)
