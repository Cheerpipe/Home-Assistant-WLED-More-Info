/**
 * WLED effect metadata and palette previews (pure logic, no DOM).
 *
 * Effect metadata is what `/json/fxdata` returns for each effect: the part
 * after `@` of the firmware's mode data string, read the way WLED's own UI
 * reads it (`setEffectParameters` and the effect list in `data/index.js`):
 *
 *   "<sliders>;<colors>;<palette>;<flags>;<defaults>"
 *
 * - sliders: speed, intensity, custom 1-3, then options 1-3 (checkboxes);
 *   "!" = default label, "" = not used, anything else = custom label.
 * - colors: primary (Fx), secondary (Bg), tertiary (Cs), same rules.
 * - palette: "!" or a label when the effect uses the palette.
 * - flags: "0" single pixel, "1" strip, "2" matrix, "1.5d" strip expanded on
 *   a matrix (MoonModules), "v" volume and "f" frequency audio reactive.
 * Empty metadata (legacy effects) means speed, intensity, the three colors
 * and the palette are all used.
 */

export type SliderKey = "sx" | "ix" | "c1" | "c2" | "c3";
export type OptionKey = "o1" | "o2" | "o3";

export interface EffectControl<K> {
  key: K;
  /** Custom label, or undefined for the default one. */
  label?: string;
}

export type EffectCategory =
  "0d" | "1d" | "1.5d" | "2d" | "volume" | "frequency";

export interface EffectMeta {
  id: number;
  name: string;
  sliders: EffectControl<SliderKey>[];
  options: EffectControl<OptionKey>[];
  /** Primary, secondary, tertiary: label (undefined = default) or null. */
  colors: [
    string | undefined | null,
    string | undefined | null,
    string | undefined | null,
  ];
  palette: boolean;
  categories: EffectCategory[];
}

const SLIDERS: SliderKey[] = ["sx", "ix", "c1", "c2", "c3"];
const OPTIONS: OptionKey[] = ["o1", "o2", "o3"];

const isNumeric = (value: string) =>
  value !== "" && !Number.isNaN(Number(value));

/** "label=default" (MoonModules) keeps only the label. */
const labelOf = (value: string): string | undefined => {
  const label = value.split("=")[0]!.trim();
  return label === "!" ? undefined : label;
};

const parseFlags = (field: string | undefined): EffectCategory[] => {
  const categories = new Set<EffectCategory>();
  for (const token of (field || "1").split(",")) {
    const flag = token.trim().toLowerCase();
    if (!flag || flag.includes("=")) continue;
    if (flag === "1.5d") {
      categories.add("1.5d");
      continue;
    }
    if (flag.includes("0")) categories.add("0d");
    if (flag.includes("1")) categories.add("1d");
    if (flag.includes("2")) categories.add("2d");
    if (flag.includes("v")) categories.add("volume");
    if (flag.includes("f")) categories.add("frequency");
  }
  return [...categories];
};

export const parseEffectMeta = (
  id: number,
  name: string,
  data: string | undefined,
): EffectMeta => {
  const fd = data ?? "";
  if (fd === "") {
    // Legacy effect without metadata: everything is used (Solid uses none).
    return {
      id,
      name,
      sliders: id === 0 ? [] : [{ key: "sx" }, { key: "ix" }],
      options: [],
      colors: [undefined, undefined, undefined],
      palette: id !== 0,
      categories: id === 0 ? [] : ["1d"],
    };
  }
  const [sliderField = "", colorField = "", paletteField = "", flagField] =
    fd.split(";");
  const sliderParts = sliderField === "" ? [] : sliderField.split(",");
  const colorParts = colorField === "" ? [] : colorField.split(",");
  const paletteParts = paletteField === "" ? [] : paletteField.split(",");
  const sliders: EffectControl<SliderKey>[] = [];
  SLIDERS.forEach((key, i) => {
    const part = sliderParts[i];
    if (part !== undefined && part.trim() !== "") {
      sliders.push({ key, label: labelOf(part) });
    }
  });
  const options: EffectControl<OptionKey>[] = [];
  OPTIONS.forEach((key, i) => {
    const part = sliderParts[5 + i];
    if (part !== undefined && part.trim() !== "") {
      options.push({ key, label: labelOf(part) });
    }
  });
  const color = (i: number) => {
    const part = colorParts[i];
    return part === undefined || part.trim() === "" ? null : labelOf(part);
  };
  const palettePart = paletteParts[0]?.split("=")[0]?.trim() ?? "";
  return {
    id,
    name,
    sliders,
    options,
    colors: [color(0), color(1), color(2)],
    palette: palettePart !== "" && !isNumeric(palettePart),
    categories: id === 0 ? [] : parseFlags(flagField),
  };
};

/** Effects in id order, without the reserved slots. */
export const parseEffects = (
  names: string[],
  fxdata: string[] | undefined,
): EffectMeta[] =>
  names
    .map((name, id) => parseEffectMeta(id, name, fxdata?.[id]))
    .filter((effect) => !effect.name.includes("RSVD"));

// ---------------------------------------------------------------------------
// Palettes
// ---------------------------------------------------------------------------

export type Rgb = [number, number, number];

/** One `/json/palx` entry: gradient stops, or the dynamic markers. */
export type PaletteStops = ([number, number, number, number] | string)[];

const rgb = ([r, g, b]: Rgb) => `rgb(${r}, ${g}, ${b})`;

/** Stand-in for random palettes ("r"): a fixed colorful mix. */
const RANDOM: Rgb[] = [
  [255, 0, 90],
  [255, 170, 0],
  [0, 210, 120],
  [0, 120, 255],
];

/**
 * CSS gradient of a palette, as WLED's UI draws it (`genPalPrevCss`):
 * gradient stops by position, or the segment colors for the dynamic
 * palettes ("c1", "c2", "c3") and a random mix for "r".
 */
export const paletteGradient = (
  stops: PaletteStops | undefined,
  colors: Rgb[],
): string | undefined => {
  if (!stops?.length) return undefined;
  const parts: string[] = [];
  stops.forEach((stop, i) => {
    if (typeof stop === "string") {
      const color =
        stop === "r"
          ? RANDOM[i % RANDOM.length]!
          : (colors[Number(stop.slice(1)) - 1] ?? [0, 0, 0]);
      const pos = stops.length === 1 ? 0 : (i / (stops.length - 1)) * 100;
      parts.push(`${rgb(color)} ${pos.toFixed(1)}%`);
    } else {
      const [pos, r, g, b] = stop;
      parts.push(`${rgb([r, g, b])} ${((pos / 255) * 100).toFixed(1)}%`);
    }
  });
  if (parts.length === 1) parts.push(parts[0]!.replace(/ [\d.]+%$/, " 100%"));
  return `linear-gradient(90deg, ${parts.join(", ")})`;
};

// ---------------------------------------------------------------------------
// Colors for `ha-hs-color-picker` ([hue in degrees, saturation 0-1])
// ---------------------------------------------------------------------------

export const rgbToHs = ([r, g, b]: Rgb): [number, number] => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const saturation = max === 0 ? 0 : delta / max;
  let hue = 0;
  if (delta) {
    if (max === r) hue = ((g - b) / delta) % 6;
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
  }
  return [(hue * 60 + 360) % 360, saturation];
};

/** Full value: WLED colors carry no brightness of their own. */
export const hsToRgb = ([hue, saturation]: [number, number]): Rgb => {
  const f = (n: number) => {
    const k = (n + hue / 60) % 6;
    return 1 - saturation * Math.max(0, Math.min(k, 4 - k, 1));
  };
  return [f(5), f(3), f(1)].map((c) => Math.round(c * 255)) as Rgb;
};
