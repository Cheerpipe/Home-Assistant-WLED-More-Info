/**
 * Frontend of the WLED More-Info integration: the integration serves this
 * module and adds it to every page (`frontend.add_extra_js_url`), so the
 * card needs no dashboard resource. With the integration's option on
 * (`?replace=1` in this module's URL), the native more-info of every WLED
 * segment light shows the card too (`native-more-info.ts`).
 */
import { localize } from "./localize/localize";
import { replaceFromUrl, replaceNativeMoreInfo } from "./native-more-info";
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

if (replaceFromUrl(import.meta.url)) replaceNativeMoreInfo();

console.info(
  `%c WLED-MORE-INFO %c ${__VERSION__} `,
  "color: white; background: #ff9800; font-weight: 700;",
  "color: #ff9800; background: white; font-weight: 700;",
);
