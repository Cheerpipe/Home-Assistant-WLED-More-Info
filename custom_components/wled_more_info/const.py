"""Constants of the WLED More-Info integration."""

from typing import Final

DOMAIN: Final = "wled_more_info"

# The card's bundle, served by the integration and added to every page.
FRONTEND_URL: Final = f"/{DOMAIN}"
FRONTEND_FILE: Final = "wled-more-info.js"

# Effect metadata and palettes, per device and firmware.
STORAGE_KEY: Final = f"{DOMAIN}.catalog"
STORAGE_VERSION: Final = 1

# Several cards of one device read its state together.
STATE_MAX_AGE: Final = 1.0

# Option: show the WLED card in Home Assistant's own more-info of every WLED
# segment light, everywhere (dashboards, search, history, the app).
CONF_REPLACE_MORE_INFO: Final = "replace_more_info"
DEFAULT_REPLACE_MORE_INFO: Final = True
