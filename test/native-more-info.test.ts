import { describe, expect, it } from "vitest";
import {
  isWledLight,
  patchContent,
  patchLight,
  replaceFromUrl,
} from "../src/native-more-info";
import type { HomeAssistant } from "../src/ha/types";

const hass = {
  entities: {
    "light.wled": { platform: "wled", translation_key: "segment" },
    "light.wled_segment_1": { platform: "wled", translation_key: "segment" },
    "light.wled_main": { platform: "wled", translation_key: "main" },
    "light.kitchen": { platform: "hue" },
    "light.wled_group": { platform: "group" },
    "light.mixed_group": { platform: "group" },
    "switch.wled_sync": { platform: "wled", translation_key: "sync" },
  },
  states: {
    "light.wled_group": {
      attributes: { entity_id: ["light.wled", "light.wled_segment_1"] },
    },
    "light.mixed_group": {
      attributes: { entity_id: ["light.wled", "light.kitchen"] },
    },
  },
} as unknown as HomeAssistant;

describe("isWledLight", () => {
  it.each([
    ["light.wled", true],
    ["light.wled_group", true],
    ["light.mixed_group", false],
    ["light.wled_main", false],
    ["light.kitchen", false],
    ["switch.wled_sync", false],
    ["light.unknown", false],
  ])("%s → %s", (entityId, expected) => {
    expect(isWledLight(hass, entityId)).toBe(expected);
  });
});

describe("replaceFromUrl", () => {
  it("reads the integration's option", () => {
    expect(replaceFromUrl("http://ha/x.js?v=1&replace=1")).toBe(true);
    expect(replaceFromUrl("http://ha/x.js?v=1&replace=0")).toBe(false);
    expect(replaceFromUrl("http://ha/x.js?v=1")).toBe(true);
  });
});

describe("native more-info", () => {
  // Stands in for the card (its module needs Lit decorators).
  customElements.define(
    "more-info-wled-state-card",
    class extends HTMLElement {
      hass?: HomeAssistant;
      inDialog?: boolean;
      entry?: unknown;
      editMode?: boolean;
      setConfig() {}
    },
  );

  // Only the prototypes' render matters.
  class FakeContent {
    hass?: HomeAssistant;
    render() {
      return "content";
    }
  }
  class FakeLight {
    stateObj?: { entity_id: string };
    entry?: unknown;
    editMode?: boolean;
    render() {
      return "native";
    }
  }
  const asElement = (cls: unknown) => cls as CustomElementConstructor;

  it("renders the WLED card for WLED lights and groups, once", () => {
    expect(patchContent(asElement(FakeContent))).toBe(true);
    expect(patchLight(asElement(FakeLight))).toBe(true);
    expect(patchLight(asElement(FakeLight))).toBe(false);

    // The content renders first and hands over hass.
    const content = new FakeContent();
    content.hass = hass;
    expect(content.render()).toBe("content");

    const light = new FakeLight();
    light.stateObj = { entity_id: "light.kitchen" };
    expect(light.render()).toBe("native");
    light.stateObj = { entity_id: "light.wled_main" };
    expect(light.render()).toBe("native");
    light.stateObj = { entity_id: "light.wled_group" };
    const entry = { entity_id: "light.wled_group" };
    light.entry = entry;
    const card = light.render() as unknown as HTMLElement & {
      hass?: HomeAssistant;
      inDialog?: boolean;
      entry?: unknown;
      editMode?: boolean;
    };
    expect(card.localName).toBe("more-info-wled-state-card");
    expect(card.hass).toBe(hass);
    // The dialog's registry entry and edit mode, for the favorite colors.
    expect(card.inDialog).toBe(true);
    expect(card.entry).toBe(entry);
    expect(card.editMode).toBeUndefined();
    light.editMode = true;
    // Same element on the next render: no flicker, state kept.
    expect(light.render()).toBe(card);
    expect(card.editMode).toBe(true);
  });
});
