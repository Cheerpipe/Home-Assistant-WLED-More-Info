/**
 * `custom:more-info-wled-state-card`: the native light more-info for a WLED
 * segment light, plus what Home Assistant's WLED integration doesn't show.
 *
 * - The button bar of `more-info-light` switches the main control between
 *   brightness, color and color temperature, and two more: the secondary
 *   (and tertiary) color, and the palettes with their previews.
 * - One more mode shows the sliders and options the current effect uses
 *   (speed, intensity, custom sliders), labeled like in WLED.
 * - Below, the effect with its category icons opens a searchable picker
 *   grouped like WLED's (strip, matrix, audio reactive); the preset opens
 *   the same picker with the device's presets.
 *
 * Brightness, colors, effect, palette, speed and intensity go through Home
 * Assistant's WLED integration; the secondary / tertiary colors, custom
 * sliders, options, palette previews and effect metadata come from the
 * device's JSON API through this integration's websocket commands (`api.ts`).
 */
import {
  mdiBrightness6,
  mdiChevronRight,
  mdiCircleOffOutline,
  mdiCreation,
  mdiFileWordBox,
  mdiPower,
  mdiTuneVariant,
  mdiViewList,
} from "@mdi/js";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { computeStateName } from "../ha/entity";
import { fireEvent } from "../ha/fire-event";
import type {
  ChildView,
  HassEntity,
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceGridOptions,
} from "../ha/types";
import { localize, type TranslationKey } from "../localize/localize";
import { ensureMoreInfoElements } from "../controls/loader";
import { POPUP_FILL_EVENT } from "../controls/popup-fill";
import {
  LIGHT_TAGS,
  lightSupportsBrightness,
  lightSupportsColor,
  lightSupportsColorTemp,
  lightSupportsWhite,
} from "../controls/state-controls";
import {
  cardAppearanceStyles,
  chipStyles,
  type CardAppearance,
} from "../controls/styles";
import {
  getSegments,
  isMissingIntegration,
  loadCatalog,
  setSegment,
  type SegmentData,
  type WledCatalog,
  type WledSegment,
  type WledTarget,
} from "./api";
import {
  CATEGORY_ICONS,
  EFFECT_PICKER_TAG,
  loadEffects,
  type EffectPickerParams,
} from "./effect-picker";
import { resolveWledLink, type WledLink, type WledLinkError } from "./link";
import {
  hsToRgb,
  paletteGradient,
  rgbToHs,
  type EffectMeta,
  type OptionKey,
  type Rgb,
  type SliderKey,
} from "./meta";
import { WLED_CARD_EDITOR_TAG } from "./editor";

export const WLED_CARD_TYPE = "more-info-wled-state-card";

export interface WledCardConfig extends LovelaceCardConfig {
  entity: string;
  show_state?: boolean;
  show_last_changed?: boolean;
  show_effects?: boolean;
  appearance?: CardAppearance;
}

type MainControl =
  "brightness" | "color" | "color_temp" | "secondary" | "palette" | "settings";

type PickerKind = "effect" | "preset";

/** Custom 3 is a 5-bit value (`getVal(elem["c3"], cust3, 0, 31)`). */
const SLIDER_MAX: Record<SliderKey, number> = {
  sx: 255,
  ix: 255,
  c1: 255,
  c2: 255,
  c3: 31,
};

/** How often the device state is read again (colors HA doesn't report). */
const POLL_MS = 15000;
/** Wait for a burst of HA updates before reading the device. */
const REFRESH_DELAY_MS = 400;

const rgbCss = (color: Rgb | undefined) =>
  color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : undefined;

const isBlack = (color: Rgb | undefined) =>
  !color || (color[0] === 0 && color[1] === 0 && color[2] === 0);

export class MoreInfoWledStateCard extends LitElement {
  public static getConfigElement() {
    return document.createElement(WLED_CARD_EDITOR_TAG);
  }

  public static getStubConfig(hass: HomeAssistant): WledCardConfig {
    const entity =
      Object.values(hass.entities).find(
        (entity) =>
          entity.platform === "wled" &&
          entity.entity_id.startsWith("light.") &&
          entity.translation_key === "segment",
      )?.entity_id ?? "";
    return { type: `custom:${WLED_CARD_TYPE}`, entity };
  }

  @property({ attribute: false }) accessor hass: HomeAssistant | undefined;

  /** Kept as given so UIX can read `uix:` / `card_mod:` from it. */
  @state() accessor _config: WledCardConfig | undefined;

  @state() accessor _ready = false;

  @state() accessor _link: WledLink | WledLinkError | undefined;

  @state() accessor _effects: Map<string, EffectMeta> | undefined;

  @state() accessor _catalog: WledCatalog | undefined;

  @state() accessor _segment: WledSegment | undefined;

  @state() accessor _deviceError: "unreachable" | "no_integration" | undefined;

  @state() accessor _mode: MainControl = "brightness";

  /** Color slot edited by the secondary mode: 1 secondary, 2 tertiary. */
  @state() accessor _slot: 1 | 2 = 1;

  /** Color under the cursor while dragging the wheel. */
  @state() accessor _preview: Rgb | undefined;

  /** Slider values while dragging, by key. */
  @state() accessor _moving: Partial<Record<SliderKey, number>> = {};

  /** Picker shown inline (outside a popup). */
  @state() accessor _pickerOpen: PickerKind | undefined;

  private _linkKey?: string;

  private _pollTimer?: ReturnType<typeof setInterval>;

  private _refreshTimer?: ReturnType<typeof setTimeout>;

  private _lastUpdated?: string;

  public setConfig(config: WledCardConfig): void {
    if (!config?.entity) throw new Error('"entity" is required');
    this._config = config;
    this._linkKey = undefined;
    this._link = undefined;
    this._segment = undefined;
    this._effects = undefined;
    this._catalog = undefined;
    this._deviceError = undefined;
    this._mode = "brightness";
    this._pickerOpen = undefined;
  }

  public getCardSize(): number {
    return 10;
  }

  public getGridOptions(): LovelaceGridOptions {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  // -------------------------------------------------------------------------
  // Popup fill (`popup-dialog.ts`): same as the state card
  // -------------------------------------------------------------------------

  public set popupFill(px: number) {
    this.style.removeProperty("--popup-min-height");
    if (px <= 0) return;
    const ownHeight = this.getBoundingClientRect().height;
    this.style.setProperty("--popup-min-height", `${ownHeight + px}px`);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    fireEvent(this, POPUP_FILL_EVENT);
    this._pollTimer = setInterval(() => this._refreshSegment(), POLL_MS);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this._pollTimer);
    clearTimeout(this._refreshTimer);
  }

  // -------------------------------------------------------------------------
  // Loading
  // -------------------------------------------------------------------------

  private get _stateObj(): HassEntity | undefined {
    return this._config && this.hass?.states[this._config.entity];
  }

  /** The light and its device, once linked (`link.ts`). */
  private get _target(): WledTarget | undefined {
    if (typeof this._link !== "object" || !this.hass || !this._config) {
      return undefined;
    }
    return {
      hass: this.hass,
      entityId: this._config.entity,
      deviceId: this._link.deviceId,
    };
  }

  private get _deviceId(): string | undefined {
    return typeof this._link === "object" ? this._link.deviceId : undefined;
  }

  protected override willUpdate(changed: PropertyValues<this>): void {
    if (!this._config || !this.hass) return;
    if (!this._ready && this._stateObj) {
      this._ready = true;
      ensureMoreInfoElements("light", [
        "ha-state-control-light-brightness",
        "ha-more-info-state-header",
        "ha-hs-color-picker",
        "ha-control-slider",
        ...LIGHT_TAGS,
      ]).then(() => this.requestUpdate());
      ensureMoreInfoElements("vacuum", [
        "ha-more-info-control-select-container",
        "ha-control-button",
        "ha-control-button-group",
      ]).then(() => this.requestUpdate());
    }
    const key = this._config.entity;
    if (this._linkKey !== key && this.hass.entities[this._config.entity]) {
      this._linkKey = key;
      resolveWledLink(this.hass, this._config.entity).then(
        (link) => {
          if (this._linkKey !== key) return;
          this._link = link;
          this._loadDevice();
        },
        () => {
          if (this._linkKey === key) this._link = "not_wled";
        },
      );
    }
    // HA updated the light (effect, palette, colors…): read the device too.
    const updated = this._stateObj?.last_updated;
    if (changed.has("hass") && updated && updated !== this._lastUpdated) {
      this._lastUpdated = updated;
      this._scheduleRefresh();
    }
  }

  private _loadDevice() {
    const target = this._target;
    if (!target) return;
    const current = () => this._deviceId === target.deviceId;
    Promise.all([
      loadEffects(target),
      loadCatalog(target),
      getSegments(target),
    ]).then(
      ([effects, catalog, segments]) => {
        if (!current()) return;
        this._effects = new Map(effects.map((fx) => [fx.name, fx]));
        this._catalog = catalog;
        this._applySegments(segments);
        this._deviceError = undefined;
      },
      (err) => {
        if (!current()) return;
        this._deviceError = isMissingIntegration(err)
          ? "no_integration"
          : "unreachable";
      },
    );
  }

  private _scheduleRefresh() {
    clearTimeout(this._refreshTimer);
    this._refreshTimer = setTimeout(
      () => this._refreshSegment(),
      REFRESH_DELAY_MS,
    );
  }

  private _refreshSegment() {
    const target = this._target;
    if (!target || this._deviceError || !this.isConnected) return;
    getSegments(target).then(
      (segments) => this._applySegments(segments),
      () => undefined,
    );
  }

  private _applySegments(segments: WledSegment[]) {
    const segment = typeof this._link === "object" ? this._link.segment : -1;
    this._segment = segments.find((seg) => seg.id === segment);
  }

  /** Writes to the device, then shows what it answered. */
  private async _setSegment(data: SegmentData) {
    const target = this._target;
    if (!target) return;
    try {
      this._applySegments(await setSegment(target, data));
    } catch {
      this._scheduleRefresh();
    }
  }

  // -------------------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------------------

  private _t(key: TranslationKey, values?: Record<string, string>) {
    return localize(this.hass, key, values);
  }

  /** HA has no effect while the light is off: the device still does. */
  private get _effectName(): string | undefined {
    const name = this._stateObj?.attributes.effect as string | undefined;
    if (name) return name;
    const fx = this._segment?.fx;
    return fx !== undefined ? this._catalog?.effectNames[fx] : undefined;
  }

  private get _effect(): EffectMeta | undefined {
    const name = this._effectName;
    return name ? this._effects?.get(name) : undefined;
  }

  private _color(slot: number): Rgb | undefined {
    const col = this._segment?.col?.[slot];
    if (col && col.length >= 3) return [col[0]!, col[1]!, col[2]!];
    if (slot === 0) {
      return this._stateObj?.attributes.rgb_color as Rgb | undefined;
    }
    return undefined;
  }

  /** The current effect uses this color slot (unknown effect: yes). */
  private _usesColor(slot: number): boolean {
    const effect = this._effect;
    return !effect || effect.colors[slot] !== null;
  }

  private get _paletteEntity(): string | undefined {
    return typeof this._link === "object" ? this._link.palette : undefined;
  }

  private get _paletteNames(): string[] {
    const entity = this._paletteEntity;
    const options = entity
      ? (this.hass!.states[entity]?.attributes.options as string[] | undefined)
      : undefined;
    return options ?? this._catalog?.paletteNames ?? [];
  }

  private get _currentPalette(): string | undefined {
    const entity = this._paletteEntity;
    if (entity) return this.hass!.states[entity]?.state;
    const id = this._segment?.pal;
    return id !== undefined ? this._catalog?.paletteNames[id] : undefined;
  }

  private _paletteCss(name: string | undefined): string | undefined {
    const catalog = this._catalog;
    if (!catalog || !name) return undefined;
    const id = catalog.paletteNames.indexOf(name);
    if (id < 0) return undefined;
    const colors = [0, 1, 2].map(
      (slot) => this._color(slot) ?? ([0, 0, 0] as Rgb),
    );
    return paletteGradient(catalog.palx[String(id)], colors);
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  protected override render() {
    if (!this._config || !this.hass) return nothing;
    const stateObj = this._stateObj;
    const appearance = this._config.appearance ?? "plain";
    const error = !stateObj
      ? this.hass.localize("ui.panel.lovelace.warning.entity_not_found", {
          entity: this._config.entity,
        })
      : this._link === "not_wled"
        ? this._t("wled.not_wled")
        : // The main light of a multi-segment device only has a brightness:
          // it gets the plain light controls, without the WLED extras.
          undefined;
    if (error || !stateObj) {
      return html`<ha-card class=${appearance}>
        <ha-alert alert-type="warning">${error}</ha-alert>
      </ha-card>`;
    }
    return html`
      <ha-card class=${appearance} .label=${computeStateName(stateObj)}>
        ${this._header(stateObj)}
        <div class="controls">
          ${this._mainControl(stateObj)} ${this._buttonBar(stateObj)}
        </div>
        ${this._config.show_effects === false ? nothing : this._effectsSection(stateObj)}
        ${this._deviceNote()}
      </ha-card>
    `;
  }

  private _header(stateObj: HassEntity) {
    const config = this._config!;
    if (config.show_state === false) return nothing;
    const override =
      stateObj.state === "on" && stateObj.attributes.brightness != null
        ? this.hass!.formatEntityAttributeValue(stateObj, "brightness")
        : undefined;
    if (config.show_last_changed === false) {
      return html`<p class="state">
        ${override ?? this.hass!.formatEntityState(stateObj)}
      </p>`;
    }
    return html`<ha-more-info-state-header
      .hass=${this.hass}
      .stateObj=${stateObj}
      .stateOverride=${override}
    ></ha-more-info-state-header>`;
  }

  // Main control ------------------------------------------------------------

  private _mainControl(stateObj: HassEntity) {
    const hass = this.hass;
    switch (this._mode) {
      case "color":
        return html`<light-color-rgb-picker
          .hass=${hass}
          .stateObj=${stateObj}
        ></light-color-rgb-picker>`;
      case "color_temp":
        return html`<light-color-temp-picker
          .hass=${hass}
          .stateObj=${stateObj}
        ></light-color-temp-picker>`;
      case "secondary":
        return this._secondaryPicker();
      case "palette":
        return this._palettePicker();
      case "settings":
        return this._settingsPanel(stateObj);
      default:
        return html`<ha-state-control-light-brightness
          .hass=${hass}
          .stateObj=${stateObj}
        ></ha-state-control-light-brightness>`;
    }
  }

  /** Same wheel as `light-color-rgb-picker`, writing to color slot 2 / 3. */
  private _secondaryPicker() {
    const slot = this._slot;
    const color = this._preview ?? this._color(slot);
    const commit = (ev: CustomEvent<{ value?: [number, number] }>) => {
      ev.stopPropagation();
      this._preview = undefined;
      const value = ev.detail.value;
      if (!value) return;
      const col: number[][] = [[], [], []];
      col[slot] = hsToRgb(value);
      this._setSegment({ col });
    };
    const moved = (ev: CustomEvent<{ value?: [number, number] }>) => {
      ev.stopPropagation();
      this._preview = ev.detail.value ? hsToRgb(ev.detail.value) : undefined;
    };
    const black = () => {
      const col: number[][] = [[], [], []];
      col[slot] = [0, 0, 0];
      this._setSegment({ col });
    };
    const slotLabel = (i: 1 | 2) =>
      this._effect?.colors[i] ??
      this._t(i === 1 ? "wled.secondary_color" : "wled.tertiary_color");
    return html`
      <div class="color-container">
        <ha-hs-color-picker
          .value=${isBlack(color) ? undefined : rgbToHs(color!)}
          .colorBrightness=${255}
          @value-changed=${commit}
          @cursor-moved=${moved}
        ></ha-hs-color-picker>
      </div>
      <div class="slot-bar">
        ${
          this._usesColor(2) || this._slot === 2
            ? html`<ha-control-button-group class="slots">
                ${([1, 2] as const).map(
                  (i) =>
                    html`<ha-control-button
                      class=${classMap({ active: slot === i })}
                      @click=${() => {
                        this._slot = i;
                      }}
                    >
                      <span
                        class="dot"
                        style=${styleMap({ background: rgbCss(this._color(i)) })}
                      ></span>
                      <span class="label">${slotLabel(i)}</span>
                    </ha-control-button>`,
                )}
              </ha-control-button-group>`
            : html`<span class="slot-title">${slotLabel(1)}</span>`
        }
        <ha-icon-button
          .label=${this._t("wled.color_black")}
          .path=${mdiCircleOffOutline}
          @click=${black}
        ></ha-icon-button>
      </div>
    `;
  }

  /** Palette list with WLED's previews; selecting goes through HA. */
  private _palettePicker() {
    const current = this._currentPalette;
    const select = (name: string) => {
      const entity = this._paletteEntity;
      if (entity) {
        this.hass!.callService("select", "select_option", {
          entity_id: entity,
          option: name,
        });
      } else {
        const id = this._catalog?.paletteNames.indexOf(name) ?? -1;
        if (id >= 0) this._setSegment({ pal: id });
      }
    };
    return html`
      <div
        class="palettes"
        role="listbox"
        aria-label=${this._t("wled.palette")}
      >
        ${this._paletteNames.map((name) => {
          const selected = name === current;
          const gradient = this._paletteCss(name);
          return html`
            <button
              class=${classMap({ "palette-row": true, selected })}
              role="option"
              aria-selected=${selected}
              @click=${() => select(name)}
            >
              <span
                class=${classMap({ preview: true, empty: !gradient })}
                style=${styleMap({ backgroundImage: gradient })}
              ></span>
              <span class="name">${name}</span>
            </button>
          `;
        })}
      </div>
    `;
  }

  protected override updated(changed: PropertyValues<this>): void {
    super.updated(changed);
    if (changed.has("_mode") && this._mode === "palette") {
      this.renderRoot
        .querySelector(".palette-row.selected")
        ?.scrollIntoView({ block: "center" });
    }
  }

  // Button bar (`more-info-light.ts`) ---------------------------------------

  private _buttonBar(stateObj: HassEntity) {
    const hass = this.hass!;
    const unavailable = stateObj.state === "unavailable";
    const supportsBrightness = lightSupportsBrightness(stateObj);
    const supportsColor = lightSupportsColor(stateObj);
    const supportsColorTemp = lightSupportsColorTemp(stateObj);
    const supportsWhite = lightSupportsWhite(stateObj);
    const device = Boolean(this._segment);
    const hasPalettes = Boolean(this._paletteEntity || this._catalog);
    // Like the native bar, a light with brightness only (WLED's main light)
    // gets the power button alone.
    const hasSettings = this._hasSettings();
    const modes =
      supportsColor || supportsColorTemp || hasPalettes || hasSettings;
    const mode = this._mode;
    const setMode = (next: MainControl) => (ev: Event) => {
      ev.stopPropagation();
      this._mode = next;
    };
    const toggle = (ev: Event) => {
      ev.stopPropagation();
      hass.callService(
        "light",
        stateObj.state === "on" ? "turn_off" : "turn_on",
        { entity_id: stateObj.entity_id },
      );
    };
    const secondary = this._color(1);
    const palette = this._paletteCss(this._currentPalette);
    return html`
      <ha-icon-button-group>
        <ha-icon-button
          .disabled=${unavailable}
          .label=${hass.localize("ui.dialogs.more_info_control.light.toggle")}
          @click=${toggle}
        >
          <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
        </ha-icon-button>
        ${modes ? html`<div class="separator"></div>` : nothing}
        ${
          supportsBrightness && modes
            ? html`<ha-icon-button-toggle
                .selected=${mode === "brightness"}
                .disabled=${unavailable}
                .label=${hass.formatEntityAttributeName(stateObj, "brightness")}
                @click=${setMode("brightness")}
              >
                <ha-svg-icon .path=${mdiBrightness6}></ha-svg-icon>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          supportsColor
            ? html`<ha-icon-button-toggle
                border-only
                .selected=${mode === "color"}
                .disabled=${unavailable}
                .label=${hass.localize("ui.dialogs.more_info_control.light.color")}
                @click=${setMode("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          supportsColor && device
            ? html`<ha-icon-button-toggle
                border-only
                .selected=${mode === "secondary"}
                .disabled=${unavailable || !this._usesColor(1)}
                .label=${this._usesColor(1) ? this._t("wled.secondary_color") : this._t("wled.not_used")}
                @click=${setMode("secondary")}
              >
                <span
                  class=${classMap({ wheel: true, swatch: true, off: isBlack(secondary) })}
                  style=${styleMap({ background: isBlack(secondary) ? undefined : rgbCss(secondary) })}
                ></span>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          supportsColorTemp
            ? html`<ha-icon-button-toggle
                border-only
                .selected=${mode === "color_temp"}
                .disabled=${unavailable}
                .label=${hass.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${setMode("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          hasPalettes
            ? html`<ha-icon-button-toggle
                border-only
                .selected=${mode === "palette"}
                .disabled=${unavailable || this._effect?.palette === false}
                .label=${this._effect?.palette === false ? this._t("wled.not_used") : this._t("wled.palette")}
                @click=${setMode("palette")}
              >
                <span
                  class=${classMap({ wheel: true, palette: true, empty: !palette })}
                  style=${styleMap({ backgroundImage: palette })}
                ></span>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          hasSettings
            ? html`<ha-icon-button-toggle
                .selected=${mode === "settings"}
                .disabled=${unavailable}
                .label=${this._t("wled.effect_settings")}
                @click=${setMode("settings")}
              >
                <ha-svg-icon .path=${mdiTuneVariant}></ha-svg-icon>
              </ha-icon-button-toggle>`
            : nothing
        }
        ${
          supportsWhite
            ? html`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${unavailable}
                  .label=${hass.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${() =>
                    hass.callService("light", "turn_on", {
                      entity_id: stateObj.entity_id,
                      white: true,
                    })}
                >
                  <ha-svg-icon .path=${mdiFileWordBox}></ha-svg-icon>
                </ha-icon-button>`
            : nothing
        }
      </ha-icon-button-group>
    `;
  }

  // Effects -----------------------------------------------------------------

  private _pickerParams(kind: PickerKind): EffectPickerParams {
    return {
      kind,
      entityId: this._config!.entity,
      presetEntity: this._presetEntity,
      deviceId: this._deviceError ? undefined : this._deviceId,
      current: this._effectName,
    };
  }

  private get _presetEntity(): string | undefined {
    return typeof this._link === "object" ? this._link.preset : undefined;
  }

  private _openPicker(ev: Event, kind: PickerKind) {
    ev.stopPropagation();
    if (this._pickerOpen) {
      const same = this._pickerOpen === kind;
      this._pickerOpen = undefined;
      if (same) return;
    }
    const stateObj = this._stateObj!;
    const view: ChildView = {
      viewTag: EFFECT_PICKER_TAG,
      viewTitle:
        kind === "preset"
          ? this._t("wled.preset")
          : this.hass!.formatEntityAttributeName(stateObj, "effect"),
      viewParams: this._pickerParams(kind),
    };
    // Inside a popup the picker is a child view; elsewhere it opens inline.
    let unhandled = false;
    const mark = () => {
      unhandled = true;
    };
    window.addEventListener("show-child-view", mark);
    fireEvent(this, "show-child-view", view);
    window.removeEventListener("show-child-view", mark);
    if (unhandled) this._pickerOpen = kind;
  }

  private _effectsSection(stateObj: HassEntity) {
    const hass = this.hass!;
    const hasEffects = Boolean(stateObj.attributes.effect_list?.length);
    const preset = this._presetEntity
      ? hass.states[this._presetEntity]
      : undefined;
    const hasPresets = Boolean(preset?.attributes.options?.length);
    if (!hasEffects && !hasPresets) return nothing;
    const meta = this._effect;
    const tags = [
      ...(meta?.categories ?? []).filter((c) => c !== "0d"),
      ...(meta?.palette ? (["palette"] as const) : []),
    ];
    const presetName =
      preset && !["unknown", "unavailable"].includes(preset.state)
        ? preset.state
        : undefined;
    return html`
      <div class="effects">
        ${
          hasEffects
            ? this._pickerChip(
                "effect",
                mdiCreation,
                hass.formatEntityAttributeName(stateObj, "effect"),
                this._effectName,
                tags.map((tag) => CATEGORY_ICONS[tag]!),
              )
            : nothing
        }
        ${
          hasPresets
            ? this._pickerChip(
                "preset",
                mdiViewList,
                this._t("wled.preset"),
                presetName,
              )
            : nothing
        }
      </div>
    `;
  }

  /** Effect or preset: the current value, opening its picker. */
  private _pickerChip(
    kind: PickerKind,
    icon: string,
    label: string,
    value: string | undefined,
    tags: string[] = [],
  ) {
    const stateObj = this._stateObj!;
    const open = this._pickerOpen === kind;
    return html`
      <button
        class="chip effect"
        ?disabled=${stateObj.state === "unavailable"}
        aria-expanded=${open}
        @click=${(ev: Event) => this._openPicker(ev, kind)}
      >
        <div class="icon"><ha-svg-icon .path=${icon}></ha-svg-icon></div>
        <div class="content">
          <p class="label">${label}</p>
          <p class="value">${value ?? "—"}</p>
        </div>
        <div class="tags">
          ${tags.map((path) => html`<ha-svg-icon .path=${path}></ha-svg-icon>`)}
        </div>
        <div class="icon">
          <ha-svg-icon .path=${mdiChevronRight}></ha-svg-icon>
        </div>
      </button>
      ${
        open
          ? html`<more-info-wled-effect-picker
              inline
              .hass=${this.hass}
              .params=${this._pickerParams(kind)}
              @wled-effect-picked=${() => {
                this._pickerOpen = undefined;
              }}
              @close-child-view=${(ev: Event) => ev.stopPropagation()}
            ></more-info-wled-effect-picker>`
          : nothing
      }
    `;
  }

  /** The effect has sliders or options to show in the settings mode. */
  private _hasSettings(): boolean {
    return this._sliderRows().length > 0 || this._optionKeys().length > 0;
  }

  /** Effect settings mode: sliders and options in the main control's place. */
  private _settingsPanel(stateObj: HassEntity) {
    if (!this._hasSettings()) {
      return html`<p class="settings empty">
        ${this._t("wled.no_effect_settings")}
      </p>`;
    }
    return html`<div class="settings">
      ${this._sliders(stateObj)} ${this._options()}
    </div>`;
  }

  /** Value of a slider: HA's number entity when there is one. */
  private _sliderValue(key: SliderKey): number | undefined {
    const moving = this._moving[key];
    if (moving !== undefined) return moving;
    const link = typeof this._link === "object" ? this._link : undefined;
    const entity =
      key === "sx" ? link?.speed : key === "ix" ? link?.intensity : undefined;
    const state = entity ? this.hass!.states[entity]?.state : undefined;
    if (state !== undefined && !Number.isNaN(Number(state)))
      return Number(state);
    return this._segment?.[key];
  }

  private _setSlider(key: SliderKey, value: number) {
    const link = typeof this._link === "object" ? this._link : undefined;
    const entity =
      key === "sx" ? link?.speed : key === "ix" ? link?.intensity : undefined;
    if (entity) {
      this.hass!.callService("number", "set_value", {
        entity_id: entity,
        value,
      });
    } else {
      this._setSegment({ [key]: value });
    }
  }

  private _sliderRows() {
    const meta = this._effect;
    const link = typeof this._link === "object" ? this._link : undefined;
    // Without the device's metadata: the speed / intensity HA has.
    const sliders = meta
      ? meta.sliders
      : ([
          ...(link?.speed ? [{ key: "sx" }] : []),
          ...(link?.intensity ? [{ key: "ix" }] : []),
        ] as { key: SliderKey; label?: string }[]);
    return sliders
      .map((slider) => ({ ...slider, value: this._sliderValue(slider.key) }))
      .filter((slider) => slider.value !== undefined);
  }

  private _sliders(stateObj: HassEntity) {
    // On each slider: ha-control-slider sets its own default color.
    const sliderStyle = styleMap({
      "--control-slider-color":
        rgbCss(this._color(0)) ??
        "var(--state-light-active-color, var(--state-active-color))",
    });
    const rows = this._sliderRows();
    if (!rows.length) return nothing;
    return html`
      <div class="sliders">
        ${rows.map((slider) => {
          const label =
            slider.label ??
            this._t(`wled.slider.${slider.key}` as TranslationKey);
          const max = SLIDER_MAX[slider.key];
          return html`
            <div class="slider">
              <div class="slider-label">
                <span>${label}</span>
                <span class="slider-value"
                  >${Math.round(((slider.value ?? 0) / max) * 100)} %</span
                >
              </div>
              <ha-control-slider
                style=${sliderStyle}
                .value=${slider.value}
                .min=${0}
                .max=${max}
                .step=${1}
                .label=${label}
                .disabled=${stateObj.state === "unavailable"}
                @slider-moved=${(ev: CustomEvent<{ value?: number }>) => {
                  ev.stopPropagation();
                  this._moving = {
                    ...this._moving,
                    [slider.key]: ev.detail.value,
                  };
                }}
                @value-changed=${(ev: CustomEvent<{ value: number }>) => {
                  ev.stopPropagation();
                  const rest = { ...this._moving };
                  delete rest[slider.key];
                  this._moving = rest;
                  this._setSlider(slider.key, ev.detail.value);
                }}
              ></ha-control-slider>
            </div>
          `;
        })}
      </div>
    `;
  }

  /** The effect's checkboxes as toggle buttons (device only). */
  private _optionKeys() {
    return this._segment ? (this._effect?.options ?? []) : [];
  }

  private _options() {
    const options = this._optionKeys();
    const segment = this._segment;
    if (!options.length || !segment) return nothing;
    return html`
      <ha-control-button-group class="options">
        ${options.map(({ key, label }) => {
          const on = Boolean(segment[key as OptionKey]);
          return html`<ha-control-button
            class=${classMap({ active: on })}
            aria-pressed=${on}
            @click=${() => this._setSegment({ [key]: !on })}
          >
            <span class="label"
              >${label ?? this._t(`wled.option.${key}` as TranslationKey)}</span
            >
          </ha-control-button>`;
        })}
      </ha-control-button-group>
    `;
  }

  private _deviceNote() {
    const error = this._deviceError;
    if (!error) return nothing;
    return html`<p class="note">
      ${this._t(
        error === "no_integration" ? "wled.no_integration" : "wled.unreachable",
      )}
    </p>`;
  }

  static override styles = [
    cardAppearanceStyles,
    chipStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: var(--popup-min-height, auto);
      }
      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      ha-card.plain {
        padding-bottom: var(--ha-space-4);
      }
      ha-card.card {
        padding: var(--ha-space-6) var(--ha-space-4);
      }
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-size: var(--ha-font-size-3xl, 28px);
        line-height: var(--ha-line-height-condensed, 1.2);
      }
      /* more-info-control-style.ts */
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* more-info-light.ts */
      .wheel {
        width: 28px;
        height: 28px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        box-sizing: border-box;
      }
      .wheel.color {
        background-image: url("/static/images/color_wheel.png");
        background-size: cover;
      }
      .wheel.color-temp {
        background: linear-gradient(
          0,
          rgb(166, 209, 255) 0%,
          white 50%,
          rgb(255, 160, 0) 100%
        );
      }
      .wheel.swatch {
        border: 1px solid var(--divider-color);
      }
      .wheel.off,
      .wheel.empty {
        border: 2px dashed var(--secondary-text-color);
      }
      *[disabled] .wheel {
        filter: grayscale(1) opacity(0.5);
      }
      /* light-color-rgb-picker.ts */
      .color-container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 320px;
      }
      ha-hs-color-picker {
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        aspect-ratio: 1;
      }
      .slot-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--ha-space-2);
        width: 100%;
        max-width: 320px;
      }
      .slot-title {
        color: var(--secondary-text-color);
      }
      .slots {
        flex: 1;
        --control-button-group-thickness: 40px;
      }
      .dot {
        position: relative;
        width: 14px;
        height: 14px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        border: 1px solid var(--divider-color);
        margin-inline-end: var(--ha-space-2);
      }
      ha-control-button .label {
        position: relative;
      }
      ha-control-button.active {
        --control-button-background-color: var(--primary-color);
        --control-button-background-opacity: 0.2;
        --control-button-icon-color: var(--primary-color);
      }
      /* Palette list: WLED previews in the size of the main control. */
      .palettes {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-1);
        width: 100%;
        max-width: 360px;
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        overflow-y: auto;
        padding: var(--ha-space-1);
        box-sizing: border-box;
        scrollbar-width: thin;
      }
      .palette-row {
        display: flex;
        align-items: center;
        gap: var(--ha-space-3);
        min-height: 44px;
        padding: var(--ha-space-1) var(--ha-space-2);
        border: none;
        border-radius: var(--ha-border-radius-lg);
        background: none;
        color: var(--primary-text-color);
        font: inherit;
        font-size: var(--ha-font-size-m);
        text-align: start;
        cursor: pointer;
      }
      .palette-row:hover,
      .palette-row:focus-visible {
        background: var(
          --ha-color-fill-neutral-quiet-hover,
          rgba(139, 145, 151, 0.12)
        );
        outline: none;
      }
      .palette-row.selected {
        background: var(
          --ha-color-fill-primary-quiet-resting,
          rgba(var(--rgb-primary-color), 0.12)
        );
        font-weight: var(--ha-font-weight-medium);
      }
      .palette-row .preview {
        width: 96px;
        height: 24px;
        flex: none;
        border-radius: var(--ha-border-radius-md);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
      }
      .palette-row .preview.empty {
        background: var(--disabled-color);
        opacity: 0.3;
      }
      .palette-row .name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* Effects */
      .effects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ha-space-4);
      }
      .effects > * {
        width: 100%;
        max-width: 400px;
      }
      .effects {
        margin-top: var(--ha-space-6);
      }
      .chip.effect {
        width: 100%;
      }
      .chip.effect .content {
        flex: 1;
      }
      .chip.effect .tags {
        display: flex;
        gap: var(--ha-space-1);
        color: var(--secondary-text-color);
        --mdc-icon-size: 18px;
      }
      more-info-wled-effect-picker {
        max-height: 420px;
        overflow-y: auto;
      }
      /* Effect settings mode, in the main control's place. */
      .settings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--ha-space-6);
        width: 100%;
        max-width: 360px;
        min-height: 200px;
        height: 45vh;
        max-height: 320px;
        overflow-y: auto;
        box-sizing: border-box;
        padding: var(--ha-space-1);
        scrollbar-width: thin;
      }
      .settings.empty {
        margin: 0;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .sliders {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-3);
      }
      .slider-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--ha-space-1);
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
      }
      .slider-value {
        font-variant-numeric: tabular-nums;
      }
      ha-control-slider {
        --control-slider-thickness: 40px;
        --control-slider-border-radius: var(--ha-border-radius-lg);
      }
      .options {
        --control-button-group-thickness: 40px;
      }
      .note {
        margin: var(--ha-space-4) var(--ha-space-4) 0;
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
        text-align: center;
      }
    `,
  ];
}

if (!customElements.get(WLED_CARD_TYPE)) {
  customElements.define(WLED_CARD_TYPE, MoreInfoWledStateCard);
}
