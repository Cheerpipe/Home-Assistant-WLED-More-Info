import { describe, expect, it } from "vitest";
import {
  hsToRgb,
  paletteGradient,
  parseEffectMeta,
  parseEffects,
  rgbToHs,
} from "../src/wled/meta";

// Real `/json/fxdata` entries (MoonModules 14.7.3).
describe("parseEffectMeta", () => {
  it("Solid has no controls", () => {
    const fx = parseEffectMeta(0, "Solid", "");
    expect(fx.sliders).toEqual([]);
    expect(fx.palette).toBe(false);
    expect(fx.categories).toEqual([]);
  });

  it("custom slider labels, colors and flags", () => {
    const fx = parseEffectMeta(1, "Blink", "!,Duty cycle;!,!;!;01");
    expect(fx.sliders).toEqual([
      { key: "sx", label: undefined },
      { key: "ix", label: "Duty cycle" },
    ]);
    expect(fx.colors).toEqual([undefined, undefined, null]);
    expect(fx.palette).toBe(true);
    expect(fx.categories).toEqual(["0d", "1d"]);
  });

  it("no colors, defaults to a strip without flags", () => {
    const fx = parseEffectMeta(8, "Colorloop", "!,Saturation;;!;01");
    expect(fx.colors).toEqual([null, null, null]);
    const rainbow = parseEffectMeta(9, "Rainbow", "!,Size;;!");
    expect(rainbow.categories).toEqual(["1d"]);
  });

  it("custom sliders and options by position", () => {
    const fx = parseEffectMeta(
      229,
      "Color Clouds",
      "!,!,Clouds,Colors,Distance,,,Cozy;;!;;sx=24,ix=32,c1=48,c2=64,c3=12,pal=0",
    );
    expect(fx.sliders.map((s) => [s.key, s.label])).toEqual([
      ["sx", undefined],
      ["ix", undefined],
      ["c1", "Clouds"],
      ["c2", "Colors"],
      ["c3", "Distance"],
    ]);
    expect(fx.options).toEqual([{ key: "o3", label: "Cozy" }]);
  });

  it("audio reactive and matrix categories", () => {
    expect(
      parseEffectMeta(140, "Waterfall", "!,Adjust color;!,!;!;01f;c1=8")
        .categories,
    ).toEqual(["0d", "1d", "frequency"]);
    expect(
      parseEffectMeta(128, "Pixels", "Fade rate,# of pixels;!,!;!;1v;m12=0")
        .categories,
    ).toEqual(["1d", "volume"]);
    expect(
      parseEffectMeta(160, "Funky Plank", "Scroll speed,,# of bands;;;2f")
        .categories,
    ).toEqual(["2d", "frequency"]);
    expect(parseEffectMeta(5, "X", "!;;!;1v,1.5d").categories).toEqual([
      "1d",
      "volume",
      "1.5d",
    ]);
  });

  it("a hidden intensity slider keeps the later ones in place", () => {
    const fx = parseEffectMeta(
      160,
      "Funky Plank",
      "Scroll speed,,# of bands;;;2f",
    );
    expect(fx.sliders.map((s) => s.key)).toEqual(["sx", "c1"]);
    expect(fx.palette).toBe(false);
  });

  it("a numeric palette field is a default, not a palette", () => {
    expect(parseEffectMeta(3, "X", "!;!;0;1").palette).toBe(false);
  });

  it("legacy effects without metadata use everything", () => {
    const fx = parseEffectMeta(70, "Old", "");
    expect(fx.sliders.map((s) => s.key)).toEqual(["sx", "ix"]);
    expect(fx.colors).toEqual([undefined, undefined, undefined]);
    expect(fx.palette).toBe(true);
  });
});

describe("parseEffects", () => {
  it("drops reserved slots and keeps ids", () => {
    const effects = parseEffects(["Solid", "RSVD", "Blink"], ["", "", "!;!;!"]);
    expect(effects.map((e) => [e.id, e.name])).toEqual([
      [0, "Solid"],
      [2, "Blink"],
    ]);
  });
});

describe("paletteGradient", () => {
  const colors: [number, number, number][] = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  it("gradient stops by position", () => {
    expect(
      paletteGradient(
        [
          [0, 255, 0, 0],
          [255, 0, 0, 255],
        ],
        colors,
      ),
    ).toBe(
      "linear-gradient(90deg, rgb(255, 0, 0) 0.0%, rgb(0, 0, 255) 100.0%)",
    );
  });

  it("dynamic palettes use the segment colors", () => {
    expect(paletteGradient(["c1", "c1", "c2", "c2"], colors)).toBe(
      "linear-gradient(90deg, rgb(255, 0, 0) 0.0%, rgb(255, 0, 0) 33.3%, rgb(0, 255, 0) 66.7%, rgb(0, 255, 0) 100.0%)",
    );
    expect(paletteGradient(["c1"], colors)).toBe(
      "linear-gradient(90deg, rgb(255, 0, 0) 0.0%, rgb(255, 0, 0) 100%)",
    );
  });

  it("no preview without stops", () => {
    expect(paletteGradient(undefined, colors)).toBeUndefined();
  });
});

describe("hs ↔ rgb", () => {
  it.each([
    [
      [255, 0, 0],
      [0, 1],
    ],
    [
      [0, 255, 0],
      [120, 1],
    ],
    [
      [0, 0, 255],
      [240, 1],
    ],
    [
      [255, 255, 255],
      [0, 0],
    ],
    [
      [255, 128, 0],
      [30.11764705882353, 1],
    ],
  ] as const)("%o ↔ %o", (rgb, hs) => {
    const [h, s] = rgbToHs([...rgb]);
    expect(h).toBeCloseTo(hs[0]);
    expect(s).toBeCloseTo(hs[1]);
    expect(hsToRgb([h, s])).toEqual([...rgb]);
  });
});
