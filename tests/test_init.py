"""Setup, frontend and config flow."""

from __future__ import annotations

from homeassistant import config_entries
from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResultType
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.wled_more_info.const import DOMAIN


async def test_adds_the_card_to_every_page(
    hass: HomeAssistant, integration: MockConfigEntry, extra_js: set[str]
) -> None:
    """The bundle is served and loaded on every page, with its version."""
    assert integration.state is ConfigEntryState.LOADED
    assert extra_js == {"/wled_more_info/wled-more-info.js?v=0.2.1&replace=1"}

    assert await hass.config_entries.async_unload(integration.entry_id)
    assert extra_js == set()


async def test_config_flow_single_entry(
    hass: HomeAssistant, extra_js: set[str]
) -> None:
    """One entry, nothing to fill in."""
    hass.config.components.update({"frontend", "wled"})
    assert await async_setup_component(hass, "http", {})
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] is FlowResultType.FORM
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {})
    assert result["type"] is FlowResultType.CREATE_ENTRY
    assert result["title"] == "WLED More-Info"

    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] is FlowResultType.ABORT
    assert result["reason"] == "single_instance_allowed"


async def test_options_turn_the_native_more_info_off(
    hass: HomeAssistant, integration: MockConfigEntry, extra_js: set[str]
) -> None:
    """The option reloads the entry with a new module URL."""
    result = await hass.config_entries.options.async_init(integration.entry_id)
    assert result["type"] is FlowResultType.FORM
    result = await hass.config_entries.options.async_configure(
        result["flow_id"], {"replace_more_info": False}
    )
    assert result["type"] is FlowResultType.CREATE_ENTRY
    await hass.async_block_till_done()
    assert extra_js == {"/wled_more_info/wled-more-info.js?v=0.2.1&replace=0"}
