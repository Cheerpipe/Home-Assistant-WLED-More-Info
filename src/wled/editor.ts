/**
 * Visual editor of the WLED card (`form-editor.ts`): only WLED lights can be
 * picked, and unset options show the value the card uses.
 */
import { defineFormEditor } from "../controls/form-editor";
import { stripDefaults } from "../controls/editor-defaults";
import { localize, type TranslationKey } from "../localize/localize";
import type { WledCardConfig } from "./wled-card";

export const WLED_CARD_EDITOR_TAG = "more-info-wled-state-card-editor";

const lang = () => undefined;

const text = (key: string) =>
  localize(lang(), `controls.${key}` as TranslationKey) || undefined;

const DEFAULTS: Partial<WledCardConfig> = {
  show_state: true,
  show_last_changed: true,
  show_effects: true,
};

export const wledCardForm = () => ({
  schema: [
    {
      name: "entity",
      required: true,
      selector: {
        // WLED segment lights, or a light group of them.
        entity: {
          filter: [
            { domain: "light", integration: "wled" },
            { domain: "light", integration: "group" },
          ],
        },
      },
    },
    {
      name: "",
      type: "grid",
      schema: [
        { name: "show_state", selector: { boolean: {} } },
        { name: "show_last_changed", selector: { boolean: {} } },
        { name: "show_effects", selector: { boolean: {} } },
      ],
    },
    {
      name: "appearance",
      selector: {
        select: {
          mode: "dropdown",
          options: ["plain", "card"].map((value) => ({
            value,
            label: text(`appearance.${value}`) ?? value,
          })),
        },
      },
    },
  ],
  computeLabel: (schema: { name: string }) => text(schema.name) ?? schema.name,
  computeHelper: (schema: { name: string }) => text(`${schema.name}_helper`),
});

defineFormEditor<WledCardConfig>(WLED_CARD_EDITOR_TAG, wledCardForm, {
  fill: (config) => ({ ...DEFAULTS, ...config }),
  strip: (config) => stripDefaults(config, DEFAULTS),
});
