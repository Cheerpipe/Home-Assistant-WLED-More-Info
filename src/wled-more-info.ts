/**
 * Frontend of the WLED More-Info integration: the integration serves this
 * module and adds it to every page (`frontend.add_extra_js_url`), so the
 * card needs no dashboard resource.
 */
import { localize } from "./localize/localize";
import { WLED_CARD_TYPE } from "./wled/wled-card";

declare const __VERSION__: string;

window.customCards = window.customCards ?? [];
if (!window.customCards.some((card) => card.type === WLED_CARD_TYPE)) {
  window.customCards.push({
    type: WLED_CARD_TYPE,
    name: localize(undefined, "wled_card.name"),
    description: localize(undefined, "wled_card.description"),
    preview: true,
    documentationURL:
      "https://github.com/Cheerpipe/Home-Assistant-WLED-More-Info",
  });
}

console.info(
  `%c WLED-MORE-INFO %c ${__VERSION__} `,
  "color: white; background: #ff9800; font-weight: 700;",
  "color: #ff9800; background: white; font-weight: 700;",
);
