/**
 * Values the cards use for unset options, as their visual editors show them
 * (`form-editor.ts`): filled in on display, left out on save.
 */
import type { HomeAssistant } from "../ha/types";

export interface EditorDefaults<C> {
  /** Config as shown: options left unset get the value the card uses. */
  fill: (config: C, hass: HomeAssistant | undefined) => C;
  /** Config as saved: options equal to that value are removed. */
  strip: (config: C, hass: HomeAssistant | undefined) => C;
}

/** `config` without the options whose value equals the one in `values`. */
export const stripDefaults = <T extends object>(
  config: T,
  values: Partial<T>,
): T => {
  const result = { ...config };
  for (const [key, value] of Object.entries(values)) {
    if (result[key as keyof T] === value) delete result[key as keyof T];
  }
  return result;
};
