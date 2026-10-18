"""Websocket commands of the card."""

from __future__ import annotations

from unittest.mock import AsyncMock

from homeassistant.core import HomeAssistant
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry
from pytest_homeassistant_custom_component.typing import WebSocketGenerator

from wled import WLEDConnectionError

from .conftest import STATE

pytestmark = pytest.mark.usefixtures("integration")


async def test_catalog_is_read_once_per_firmware(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
    wled_client: AsyncMock,
) -> None:
    """Effects and paginated palettes, then from the cache."""
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {"type": "wled_more_info/catalog", "entity_id": "light.wled_segment_1"}
    )
    msg = await client.receive_json()
    assert msg["success"]
    assert msg["result"] == {
        "version": "14.7.3",
        "effectNames": ["Solid", "Blink"],
        "fxdata": ["", "!,!;!,!;!;01"],
        "paletteNames": ["Default", "* Random Cycle", "Party"],
        "palx": {"0": [[0, 255, 0, 0]], "1": [[0, 255, 0, 0]]},
    }
    calls = wled_client.request.await_count

    # Another light of the same device: no new request.
    await client.send_json_auto_id(
        {"type": "wled_more_info/catalog", "entity_id": "light.wled"}
    )
    assert (await client.receive_json())["success"]
    assert wled_client.request.await_count == calls

    # A firmware update reads it again.
    wled_entry.runtime_data.data.info.version = "14.8.0"
    await client.send_json_auto_id(
        {"type": "wled_more_info/catalog", "entity_id": "light.wled"}
    )
    assert (await client.receive_json())["success"]
    assert wled_client.request.await_count > calls


async def test_state_is_shared_by_close_reads(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
    wled_client: AsyncMock,
) -> None:
    """Two cards reading at once make one request."""
    client = await hass_ws_client(hass)
    for entity_id in ("light.wled", "light.wled_segment_1"):
        await client.send_json_auto_id(
            {"type": "wled_more_info/state", "entity_id": entity_id}
        )
        msg = await client.receive_json()
        assert msg["result"] == {"seg": STATE["seg"]}
    assert wled_client.request.await_count == 1


async def test_set_segment_writes_the_lights_own_segment(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
    wled_client: AsyncMock,
) -> None:
    """The segment comes from the entity, never from the browser."""
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {
            "type": "wled_more_info/set_segment",
            "entity_id": "light.wled_segment_1",
            "data": {"col": [[], [0, 0, 255]], "c3": 20, "o1": True},
        }
    )
    msg = await client.receive_json()
    assert msg["success"]
    wled_client.request.assert_awaited_with(
        "/json/state",
        method="POST",
        data={
            "seg": [{"col": [[], [0, 0, 255]], "c3": 20, "o1": True, "id": 1}],
            "v": True,
        },
    )
    wled_entry.runtime_data.async_request_refresh.assert_awaited()


@pytest.mark.parametrize(
    "data",
    [{"id": 3}, {"c3": 32}, {"col": [[300, 0, 0]]}, {"bri": 10}, {"n": "x"}],
)
async def test_set_segment_rejects_other_fields(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
    data: dict,
) -> None:
    """Only the fields the card changes, within WLED's ranges."""
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {
            "type": "wled_more_info/set_segment",
            "entity_id": "light.wled_segment_1",
            "data": data,
        }
    )
    msg = await client.receive_json()
    assert not msg["success"]
    assert msg["error"]["code"] == "invalid_format"


async def test_main_light_has_no_segment(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
) -> None:
    """The main light can be read but has no segment to change."""
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {
            "type": "wled_more_info/set_segment",
            "entity_id": "light.wled_main",
            "data": {"fx": 1},
        }
    )
    msg = await client.receive_json()
    assert msg["error"]["code"] == "not_found"


async def test_only_wled_lights(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
) -> None:
    """Other entities can't be used to reach anything."""
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {"type": "wled_more_info/state", "entity_id": "light.kitchen"}
    )
    msg = await client.receive_json()
    assert msg["error"]["code"] == "not_found"


async def test_device_errors(
    hass: HomeAssistant,
    hass_ws_client: WebSocketGenerator,
    wled_entry: MockConfigEntry,
    wled_client: AsyncMock,
) -> None:
    """An unreachable device is reported, not raised."""
    wled_client.request.side_effect = WLEDConnectionError("timeout")
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {"type": "wled_more_info/state", "entity_id": "light.wled"}
    )
    msg = await client.receive_json()
    assert msg["error"]["code"] == "device_error"
