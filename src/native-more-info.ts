/**
 * Instance-wide option: Home Assistant's own more-info of every WLED segment
 * light, and of every light group made only of them (`groups.ts`), shows the WLED card
 * instead of the native light controls.
 *
 * In the native dialog, `more-info-content` renders the domain's controls
 * (`more-info-light`) and, for a group, its members below them. Only
 * `more-info-light` is replaced, so everything else (header, history,
 * settings, ⋮ menu, related, the group's members, child views) stays
 * native, and so does every other entity. `more-info-light` gets no `hass`
 * (it reads Home Assistant's contexts), so `more-info-content`, which gets
 * it on every update, hands it to the cards. The WLED "main" light
 * (brightness only) keeps the native controls.
 */
import { isSegmentLight, segmentLeaves } from "./groups";
import type { HassEntity, HomeAssistant } from "./ha/types";
import type { WledCardConfig } from "./wled/wled-card";

/** `WLED_CARD_TYPE`, without loading the card's module here. */
const WLED_CARD_TYPE = "more-info-wled-state-card";

export const CONTENT_TAG = "more-info-content";
export const LIGHT_TAG = "more-info-light";

const PATCHED = Symbol.for("wled-more-info.patched");

type NativeElement = HTMLElement & {
  hass?: HomeAssistant;
  stateObj?: HassEntity;
};

type CardElement = HTMLElement & {
  hass?: HomeAssistant;
  setConfig(config: WledCardConfig): void;
};

type Patchable = { render?: () => unknown; [PATCHED]?: boolean };

/** WLED segment lights (not the main light) and groups made only of them, nested too. */
export const isWledLight = (
  hass: HomeAssistant | undefined,
  entityId: string | undefined,
): boolean => {
  if (!hass || !entityId?.startsWith("light.")) return false;
  return (
    isSegmentLight(hass, entityId) ||
    Boolean(segmentLeaves(hass, entityId)?.length)
  );
};

/** The `replace` flag the integration puts in the module's URL. */
export const replaceFromUrl = (url: string): boolean => {
  try {
    return new URL(url).searchParams.get("replace") !== "0";
  } catch {
    return true;
  }
};

let latestHass: HomeAssistant | undefined;
const cards = new WeakMap<NativeElement, CardElement>();
const liveCards = new Set<CardElement>();

const currentHass = (): HomeAssistant | undefined =>
  latestHass ??
  (document.querySelector("home-assistant") as NativeElement | null)?.hass;

const cardFor = (host: NativeElement, hass: HomeAssistant, entity: string) => {
  let card = cards.get(host);
  if (!card || card.getAttribute("data-entity") !== entity) {
    card = document.createElement(WLED_CARD_TYPE) as CardElement;
    card.setConfig({ type: `custom:${WLED_CARD_TYPE}`, entity });
    card.setAttribute("data-entity", entity);
    cards.set(host, card);
  }
  liveCards.add(card);
  card.hass = hass;
  return card;
};

const patch = (
  element: CustomElementConstructor | undefined,
  render: (original: () => unknown, host: NativeElement) => unknown,
): boolean => {
  const proto = element?.prototype as Patchable | undefined;
  if (!proto?.render || proto[PATCHED]) return false;
  const original = proto.render;
  proto.render = function (this: NativeElement) {
    return render(() => original.call(this), this);
  };
  proto[PATCHED] = true;
  return true;
};

/** `more-info-content`: hands `hass` to the cards on every update. */
export const patchContent = (element: CustomElementConstructor | undefined) =>
  patch(element, (original, host) => {
    if (host.hass) {
      latestHass = host.hass;
      for (const card of liveCards) {
        if (card.isConnected) card.hass = host.hass;
        else liveCards.delete(card);
      }
    }
    return original();
  });

/** `more-info-light`: the WLED card for WLED lights. */
export const patchLight = (element: CustomElementConstructor | undefined) =>
  patch(element, (original, host) => {
    const hass = currentHass();
    const entityId = host.stateObj?.entity_id;
    // Lit renders a DOM node as is: no template from another Lit copy.
    return hass && entityId && isWledLight(hass, entityId)
      ? cardFor(host, hass, entityId)
      : original();
  });

/** Waits for the native dialog's chunks, then patches them. */
export const replaceNativeMoreInfo = (): void => {
  customElements
    .whenDefined(CONTENT_TAG)
    .then(() => patchContent(customElements.get(CONTENT_TAG)));
  customElements
    .whenDefined(LIGHT_TAG)
    .then(() => patchLight(customElements.get(LIGHT_TAG)));
};
