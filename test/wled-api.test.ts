import { describe, expect, it, vi } from "vitest";
import {
  getSegments,
  isMissingIntegration,
  loadCatalog,
  setSegment,
  type WledTarget,
} from "../src/wled/api";
import type { HomeAssistant } from "../src/ha/types";

const target = (callWS: ReturnType<typeof vi.fn>, deviceId = "dev1") =>
  ({
    hass: { callWS } as unknown as HomeAssistant,
    entityId: "light.wled_segment_1",
    deviceId,
  }) satisfies WledTarget;

describe("WLED api through Home Assistant", () => {
  it("asks the integration for the catalog once per device", async () => {
    const callWS = vi.fn().mockResolvedValue({ version: "14.7" });
    await loadCatalog(target(callWS, "catalog-device"));
    await loadCatalog(target(callWS, "catalog-device"));
    expect(callWS).toHaveBeenCalledOnce();
    expect(callWS).toHaveBeenCalledWith({
      type: "wled_more_info/catalog",
      entity_id: "light.wled_segment_1",
    });
  });

  it("retries the catalog after an error", async () => {
    const callWS = vi
      .fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValue({ version: "14.7" });
    const t = target(callWS, "retry-device");
    await expect(loadCatalog(t)).rejects.toThrow("offline");
    await expect(loadCatalog(t)).resolves.toEqual({ version: "14.7" });
  });

  it("reads and writes segments by entity", async () => {
    const callWS = vi.fn().mockResolvedValue({ seg: [{ id: 1 }] });
    expect(await getSegments(target(callWS))).toEqual([{ id: 1 }]);
    await setSegment(target(callWS), { col: [[], [255, 0, 0]] });
    expect(callWS).toHaveBeenLastCalledWith({
      type: "wled_more_info/set_segment",
      entity_id: "light.wled_segment_1",
      data: { col: [[], [255, 0, 0]] },
    });
  });

  it("recognizes a missing integration", () => {
    expect(isMissingIntegration({ code: "unknown_command" })).toBe(true);
    expect(isMissingIntegration({ code: "device_error" })).toBe(false);
  });
});
