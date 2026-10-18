import type { HomeAssistant } from "../ha/types";
import { en } from "./languages/en";
import { es } from "./languages/es";

export type TranslationKey = keyof typeof en;

const LANGUAGES: Record<string, Partial<Record<TranslationKey, string>>> = {
  en,
  es,
};

/**
 * Strings that exist in Home Assistant are always taken from `hass.localize`;
 * this only covers the card's own texts (mostly the editor).
 */
export const localize = (
  hass: HomeAssistant | undefined,
  key: TranslationKey,
  values?: Record<string, string | number>,
): string => {
  const lang =
    hass?.language ??
    ((typeof document !== "undefined" && document.documentElement.lang) ||
      "en");
  const base = lang.split("-")[0];
  let text = LANGUAGES[lang]?.[key] ?? LANGUAGES[base]?.[key] ?? en[key];
  if (values) {
    for (const [name, value] of Object.entries(values)) {
      text = text.replace(`{${name}}`, String(value));
    }
  }
  return text;
};
