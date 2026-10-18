"""WLED More-Info: a native-looking more-info card for WLED lights.

The integration serves the card's frontend and answers its websocket
commands, talking to the WLED devices of Home Assistant's WLED integration
from the server. The browser never calls the device, so the card works on
https pages, in the companion app and from outside the home network.
"""

from __future__ import annotations

from pathlib import Path

from homeassistant.components.frontend import add_extra_js_url, remove_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from .const import DOMAIN, FRONTEND_FILE, FRONTEND_URL
from .device import WledProxy
from .websocket import async_register_commands

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Serve the frontend and register the websocket commands."""
    hass.data[DOMAIN] = WledProxy(hass)
    async_register_commands(hass)
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                FRONTEND_URL,
                str(Path(__file__).parent / "frontend"),
                cache_headers=False,
            )
        ]
    )
    return True


def _module_url(version: str) -> str:
    # The version in the URL makes browsers load each release once.
    return f"{FRONTEND_URL}/{FRONTEND_FILE}?v={version}"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Add the card to every page."""
    integration = await async_get_integration(hass, DOMAIN)
    add_extra_js_url(hass, _module_url(str(integration.version)))
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Stop adding the card to new pages."""
    integration = await async_get_integration(hass, DOMAIN)
    remove_extra_js_url(hass, _module_url(str(integration.version)))
    return True
