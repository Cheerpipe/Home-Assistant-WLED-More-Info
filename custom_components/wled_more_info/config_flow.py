"""Config flow of WLED More-Info: a single entry, one option."""

from __future__ import annotations

from typing import Any

from homeassistant.config_entries import (
    ConfigEntry,
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlowWithReload,
)
from homeassistant.core import callback
import voluptuous as vol

from .const import CONF_REPLACE_MORE_INFO, DEFAULT_REPLACE_MORE_INFO, DOMAIN


class WledMoreInfoConfigFlow(ConfigFlow, domain=DOMAIN):
    """Add the integration; it works with every WLED device of HA."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Confirm and create the entry."""
        if user_input is not None:
            return self.async_create_entry(
                title="WLED More-Info",
                data={},
                options={
                    CONF_REPLACE_MORE_INFO: user_input.get(
                        CONF_REPLACE_MORE_INFO, DEFAULT_REPLACE_MORE_INFO
                    )
                },
            )
        return self.async_show_form(step_id="user", data_schema=_schema({}))

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> WledMoreInfoOptionsFlow:
        """Options: where the card is shown."""
        return WledMoreInfoOptionsFlow()


class WledMoreInfoOptionsFlow(OptionsFlowWithReload):
    """Turn the instance-wide more-info on or off (reloads the entry)."""

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Show the option."""
        if user_input is not None:
            return self.async_create_entry(data=user_input)
        return self.async_show_form(
            step_id="init", data_schema=_schema(self.config_entry.options)
        )


def _schema(options: dict[str, Any]) -> vol.Schema:
    return vol.Schema(
        {
            vol.Required(
                CONF_REPLACE_MORE_INFO,
                default=options.get(CONF_REPLACE_MORE_INFO, DEFAULT_REPLACE_MORE_INFO),
            ): bool,
        }
    )
