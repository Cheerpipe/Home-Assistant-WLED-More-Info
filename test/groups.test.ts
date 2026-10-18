import { describe, expect, it } from "vitest";
import { segmentLeaves, shownLeaf, writeLeaves } from "../src/groups";
import type { HomeAssistant } from "../src/ha/types";
import { isWledLight } from "../src/native-more-info";

const segment = { platform: "wled", translation_key: "segment" };

const MEMBERS: Record<string, string[]> = {
  "light.group_a": ["light.a1", "light.a2"],
  "light.group_b": ["light.b1", "light.b2"],
  "light.relative": ["light.group_a", "light.group_b"],
  "light.mixed": ["light.group_a", "light.kitchen"],
  "light.loop_1": ["light.a1", "light.loop_2"],
  "light.loop_2": ["light.loop_1"],
};

/** relative → [group_a → (a1, a2), group_b → (b1, b2)], plus odd cases. */
const hassWith = (on: string[]): HomeAssistant => {
  const states: Record<string, unknown> = {};
  for (const leaf of ["light.a1", "light.a2", "light.b1", "light.b2"]) {
    states[leaf] = { state: on.includes(leaf) ? "on" : "off", attributes: {} };
  }
  for (const [id, members] of Object.entries(MEMBERS)) {
    // A group is on when any of its leaves is.
    const lit = members.some((member) => on.includes(member));
    states[id] = {
      state: lit ? "on" : "off",
      attributes: { entity_id: members },
    };
  }
  return {
    entities: {
      "light.a1": segment,
      "light.a2": segment,
      "light.b1": segment,
      "light.b2": segment,
      "light.main": { platform: "wled", translation_key: "main" },
      "light.kitchen": { platform: "hue" },
      "light.group_a": { platform: "group" },
      "light.group_b": { platform: "group" },
      "light.relative": { platform: "relative_light_group" },
      "light.mixed": { platform: "group" },
      "light.loop_1": { platform: "group" },
      "light.loop_2": { platform: "group" },
    },
    states,
  } as unknown as HomeAssistant;
};

describe("nested groups", () => {
  it("finds the WLED leaves through groups of groups", () => {
    const hass = hassWith([]);
    expect(segmentLeaves(hass, "light.relative")).toEqual([
      "light.a1",
      "light.a2",
      "light.b1",
      "light.b2",
    ]);
    expect(isWledLight(hass, "light.relative")).toBe(true);
  });

  it("refuses other lights, the main light and loops", () => {
    const hass = hassWith([]);
    expect(segmentLeaves(hass, "light.mixed")).toBeUndefined();
    expect(segmentLeaves(hass, "light.loop_1")).toBeUndefined();
    expect(isWledLight(hass, "light.mixed")).toBe(false);
    expect(isWledLight(hass, "light.loop_1")).toBe(false);
    expect(segmentLeaves(hass, "light.a1")).toBeUndefined();
  });

  it("follows the relative group's on-only rule through the nesting", () => {
    // Everything off: every leaf.
    expect(writeLeaves(hassWith([]), "light.relative")).toEqual([
      "light.a1",
      "light.a2",
      "light.b1",
      "light.b2",
    ]);
    // Only b2 on: the relative group reaches group_b, a light group,
    // which changes all its members.
    const hass = hassWith(["light.b2"]);
    const leaves = writeLeaves(hass, "light.relative");
    expect(leaves).toEqual(["light.b1", "light.b2"]);
    expect(shownLeaf(hass, leaves)).toBe("light.b2");
  });
});
