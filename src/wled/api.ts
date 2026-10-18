/**
 * WLED JSON API through Home Assistant: the parts the WLED integration
 * doesn't expose (secondary and tertiary colors, the custom sliders and
 * options, palette previews, effect metadata). The `wled_more_info`
 * integration answers these websocket commands and talks to the device from
 * the server, so the browser never needs to reach it (https pages, the
 * companion app, remote access).
 */
import type { HomeAssistant } from "../ha/types";
import type { PaletteStops } from "./meta";

export interface WledSegment {
  id: number;
  n?: string;
  on?: boolean;
  bri?: number;
  col: number[][];
  fx: number;
  pal: number;
  sx: number;
  ix: number;
  c1?: number;
  c2?: number;
  c3?: number;
  o1?: boolean;
  o2?: boolean;
  o3?: boolean;
}

export interface WledCatalog {
  version: string;
  effectNames: string[];
  fxdata: string[];
  paletteNames: string[];
  /** Palette id → preview stops (`/json/palx`). */
  palx: Record<string, PaletteStops>;
}

/** A WLED segment light and the device it belongs to (cache key). */
export interface WledTarget {
  hass: HomeAssistant;
  entityId: string;
  deviceId: string;
}

export type SegmentData = Partial<Omit<WledSegment, "id" | "n">>;

export const WS_PREFIX = "wled_more_info";

/** The integration's commands are missing: it isn't set up. */
export const isMissingIntegration = (err: unknown): boolean =>
  (err as { code?: string } | undefined)?.code === "unknown_command";

const catalogs = new Map<string, Promise<WledCatalog>>();

/** Effects, metadata and palettes of a device; cached per device. */
export const loadCatalog = (target: WledTarget): Promise<WledCatalog> => {
  let catalog = catalogs.get(target.deviceId);
  if (!catalog) {
    catalog = target.hass.callWS<WledCatalog>({
      type: `${WS_PREFIX}/catalog`,
      entity_id: target.entityId,
    });
    catalogs.set(target.deviceId, catalog);
    catalog.catch(() => catalogs.delete(target.deviceId));
  }
  return catalog;
};

export const getSegments = async (target: WledTarget): Promise<WledSegment[]> =>
  (
    await target.hass.callWS<{ seg: WledSegment[] }>({
      type: `${WS_PREFIX}/state`,
      entity_id: target.entityId,
    })
  ).seg;

/**
 * Changes the light's segment (the server picks it from the entity);
 * `col: [[], rgb]` keeps the primary color.
 */
export const setSegment = async (
  target: WledTarget,
  data: SegmentData,
): Promise<WledSegment[]> =>
  (
    await target.hass.callWS<{ seg: WledSegment[] }>({
      type: `${WS_PREFIX}/set_segment`,
      entity_id: target.entityId,
      data,
    })
  ).seg;
