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

from .const import (
    CONF_REPLACE_MORE_INFO,
    DEFAULT_REPLACE_MORE_INFO,
    DOMAIN,
    FRONTEND_FILE,
    FRONTEND_URL,
)
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


def _module_url(version: str, entry: ConfigEntry) -> str:
    """The card's module; its query carries the version and the options.

    The version makes browsers load each release once; the frontend reads
    the options from its own URL (`import.meta.url`).
    """
    replace = entry.options.get(CONF_REPLACE_MORE_INFO, DEFAULT_REPLACE_MORE_INFO)
    return f"{FRONTEND_URL}/{FRONTEND_FILE}?v={version}&replace={int(replace)}"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Add the card to every page."""
    integration = await async_get_integration(hass, DOMAIN)
    url = _module_url(str(integration.version), entry)
    add_extra_js_url(hass, url)
    entry.async_on_unload(lambda: remove_extra_js_url(hass, url))
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Stop adding the card to new pages (`async_on_unload`)."""
    return True
