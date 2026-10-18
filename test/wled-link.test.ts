import { describe, expect, it } from "vitest";
import { parseSegmentUniqueId, resolveWledLight } from "../src/wled/link";
import type { HomeAssistant } from "../src/ha/types";

describe("parseSegmentUniqueId", () => {
  it.each([
    ["48e729941908_0", { mac: "48e729941908", segment: 0 }],
    ["48e729941908_3", { mac: "48e729941908", segment: 3 }],
    // The main light (brightness only) is the bare MAC.
    ["48e729941908", undefined],
  ])("%s → %o", (uniqueId, expected) => {
    expect(parseSegmentUniqueId(uniqueId)).toEqual(expected);
  });
});

describe("resolveWledLight", () => {
  const registry: Record<string, { entity_id: string; unique_id: string }> = {
    "light.a": { entity_id: "light.a", unique_id: "mac1_0" },
    "light.b": { entity_id: "light.b", unique_id: "mac2_1" },
    "select.a_palette": {
      entity_id: "select.a_palette",
      unique_id: "mac1_palette_0",
    },
    "select.b_palette": {
      entity_id: "select.b_palette",
      unique_id: "mac2_palette_1",
    },
    "light.main": { entity_id: "light.main", unique_id: "mac1" },
  };
  const hass = (members: string[]) =>
    ({
      entities: {
        "light.a": {
          entity_id: "light.a",
          platform: "wled",
          device_id: "d1",
          translation_key: "segment",
        },
        "select.a_palette": {
          entity_id: "select.a_palette",
          platform: "wled",
          device_id: "d1",
        },
        "light.main": {
          entity_id: "light.main",
          platform: "wled",
          device_id: "d1",
          translation_key: "main",
        },
        "light.b": {
          entity_id: "light.b",
          platform: "wled",
          device_id: "d2",
          translation_key: "segment",
        },
        "select.b_palette": {
          entity_id: "select.b_palette",
          platform: "wled",
          device_id: "d2",
        },
        "light.group": { entity_id: "light.group", platform: "group" },
      },
      states: { "light.group": { attributes: { entity_id: members } } },
      callWS: async ({ entity_ids }: { entity_ids: string[] }) =>
        Object.fromEntries(entity_ids.map((id) => [id, registry[id] ?? null])),
    }) as unknown as HomeAssistant;

  it("links a group of WLED segments to every member", async () => {
    const link = await resolveWledLight(
      hass(["light.a", "light.b"]),
      "light.group",
    );
    expect(link).toMatchObject({
      entityId: "light.a",
      palette: "select.a_palette",
    });
    expect(
      typeof link === "object" &&
        link.members?.map((m) => [m.entityId, m.segment, m.palette]),
    ).toEqual([
      ["light.a", 0, "select.a_palette"],
      ["light.b", 1, "select.b_palette"],
    ]);
  });

  it("refuses a group with a main light", async () => {
    expect(
      await resolveWledLight(hass(["light.a", "light.main"]), "light.group"),
    ).toBe("not_wled");
  });
});
