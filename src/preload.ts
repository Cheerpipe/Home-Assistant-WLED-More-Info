/**
 * Prepares the WLED lights' data in the background once Home Assistant has
 * loaded (links, effects and palettes, segment state), so even the first
 * more-info opening draws complete, with every button and the presets.
 */
import type { HomeAssistant } from "./ha/types";
import { isWledLight } from "./native-more-info";
import { getSegments, type WledTarget } from "./wled/api";
import { loadEffects } from "./wled/effect-picker";
import { resolveWledLight } from "./wled/link";

const HASS_WAIT_MS = 60000;
const HASS_POLL_MS = 500;

const whenIdle = () =>
  new Promise<void>((resolve) => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => resolve(), { timeout: 2000 });
    } else {
      setTimeout(resolve, 200);
    }
  });

const appHass = (): HomeAssistant | undefined =>
  (
    document.querySelector("home-assistant") as
      (Element & { hass?: HomeAssistant }) | null
  )?.hass;

const waitForHass = async (): Promise<HomeAssistant | undefined> => {
  for (let waited = 0; waited < HASS_WAIT_MS; waited += HASS_POLL_MS) {
    const hass = appHass();
    if (hass?.entities && Object.keys(hass.states).length) return hass;
    await new Promise((resolve) => setTimeout(resolve, HASS_POLL_MS));
  }
  return undefined;
};

/** One light at a time, while the browser is idle; errors are ignored. */
export const preloadWledLights = async (): Promise<void> => {
  const hass = await waitForHass();
  if (!hass) return;
  const lights = Object.keys(hass.states).filter((id) => isWledLight(hass, id));
  const devices = new Set<string>();
  for (const entityId of lights) {
    await whenIdle();
    try {
      const link = await resolveWledLight(hass, entityId);
      if (typeof link !== "object" || devices.has(link.deviceId)) continue;
      devices.add(link.deviceId);
      const target: WledTarget = {
        hass,
        entityId: link.entityId,
        deviceId: link.deviceId,
      };
      await loadEffects(target);
      await getSegments(target);
    } catch {
      // The card loads it again when opened.
    }
  }
};
