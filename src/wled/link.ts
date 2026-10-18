/**
 * What a WLED segment light is linked to: its segment number, the palette
 * select and speed / intensity numbers of the same segment, and the device
 * address. Unique ids follow HA's WLED integration (`light.py`, `select.py`,
 * `number.py`): `<mac>_<segment>`, `<mac>_palette_<segment>`,
 * `<mac>_speed_<segment>`, `<mac>_intensity_<segment>`; the main light
 * (brightness only, no effects) is the bare `<mac>`.
 *
 * A light group whose members are all WLED segment lights links to its
 * members: the first one is read, all of them are written.
 */
import type { HomeAssistant } from "../ha/types";

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

/** Members of a light group, when the entity is one. */
export const groupMembers = (
  hass: HomeAssistant,
  entityId: string,
): string[] | undefined => {
  if (hass.entities[entityId]?.platform === "wled") return undefined;
  const members = hass.states[entityId]?.attributes.entity_id;
  return Array.isArray(members) && members.length
    ? (members as string[])
    : undefined;
};

/** A WLED segment light, or a group of them (see `WledLink.members`). */
export const resolveWledLight = async (
  hass: HomeAssistant,
  entityId: string,
): Promise<WledLink | WledLinkError> => {
  const members = groupMembers(hass, entityId);
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
