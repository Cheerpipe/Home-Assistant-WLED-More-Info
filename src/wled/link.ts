/**
 * What a WLED segment light is linked to: its segment number, the palette
 * select and speed / intensity numbers of the same segment, and the device
 * address. Unique ids follow HA's WLED integration (`light.py`, `select.py`,
 * `number.py`): `<mac>_<segment>`, `<mac>_palette_<segment>`,
 * `<mac>_speed_<segment>`, `<mac>_intensity_<segment>`; the main light
 * (brightness only, no effects) is the bare `<mac>`.
 *
 * A light group whose leaves are all WLED segment lights (`groups.ts`,
 * nested groups included) links to those leaves; which ones a change
 * reaches depends on the groups (`writeLeaves`).
 */
import type { HomeAssistant } from "../ha/types";
import { LoadCache } from "./cache";
import { segmentLeaves } from "../groups";

export interface WledLink {
  /** The WLED segment light (a member, for a group). */
  entityId: string;
  segment: number;
  /** Device of the light: the cache key of its effects and palettes. */
  deviceId: string;
  palette?: string;
  /** WLED's preset select (one per device). */
  preset?: string;
  speed?: string;
  intensity?: string;
  /** Every member, for a group of WLED lights (this link is the first). */
  members?: WledLink[];
}

export type WledLinkError = "not_wled" | "main_light";

interface RegistryEntry {
  entity_id: string;
  unique_id: string;
}

/** `<mac>_<segment>` of a segment light, or undefined for the main light. */
export const parseSegmentUniqueId = (
  uniqueId: string,
): { mac: string; segment: number } | undefined => {
  const match = /^(.+)_(\d+)$/.exec(uniqueId);
  return match ? { mac: match[1]!, segment: Number(match[2]) } : undefined;
};

export const resolveWledLink = async (
  hass: HomeAssistant,
  entityId: string,
): Promise<WledLink | WledLinkError> => {
  const display = hass.entities[entityId];
  if (!entityId.startsWith("light.") || display?.platform !== "wled") {
    return "not_wled";
  }
  const deviceId = display.device_id ?? entityId;
  const siblings = Object.values(hass.entities)
    .filter((entity) => entity.device_id === deviceId)
    .map((entity) => entity.entity_id);
  const entries = await hass.callWS<Record<string, RegistryEntry | null>>({
    type: "config/entity_registry/get_entries",
    entity_ids: siblings.includes(entityId)
      ? siblings
      : [entityId, ...siblings],
  });
  const own = entries[entityId];
  const parsed = own && parseSegmentUniqueId(own.unique_id);
  if (!parsed) return "main_light";
  const byUniqueId = new Map(
    Object.values(entries)
      .filter((entry): entry is RegistryEntry => Boolean(entry))
      .map((entry) => [entry.unique_id, entry.entity_id]),
  );
  const { mac, segment } = parsed;
  return {
    entityId,
    segment,
    deviceId,
    palette: byUniqueId.get(`${mac}_palette_${segment}`),
    speed: byUniqueId.get(`${mac}_speed_${segment}`),
    intensity: byUniqueId.get(`${mac}_intensity_${segment}`),
    preset: byUniqueId.get(`${mac}_preset`),
  };
};

const links = new LoadCache<WledLink | WledLinkError>();

/** Cache key of a light's link: a group links again when its members change. */
export const linkKey = (hass: HomeAssistant, entityId: string): string =>
  [entityId, ...(segmentLeaves(hass, entityId) ?? [])].join("|");

/** The link of a light, if it was resolved on this page already. */
export const cachedLink = (
  hass: HomeAssistant,
  entityId: string,
): WledLink | WledLinkError | undefined => links.peek(linkKey(hass, entityId));

/** A WLED segment light, or a group of them (see `WledLink.members`). */
export const resolveWledLight = (
  hass: HomeAssistant,
  entityId: string,
): Promise<WledLink | WledLinkError> =>
  links.get(linkKey(hass, entityId), () => linkLight(hass, entityId));

const linkLight = async (
  hass: HomeAssistant,
  entityId: string,
): Promise<WledLink | WledLinkError> => {
  // A group, nested or not: its WLED segment lights.
  const members = segmentLeaves(hass, entityId);
  if (!members) return resolveWledLink(hass, entityId);
  const links = await Promise.all(
    members.map((member) => resolveWledLink(hass, member)),
  );
  const segments = links.filter(
    (link): link is WledLink => typeof link === "object",
  );
  if (segments.length !== links.length) return "not_wled";
  return { ...segments[0]!, members: segments };
};
