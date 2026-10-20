/**
 * Light groups of WLED segment lights, nested at any depth: Home
 * Assistant's light groups and Relative Light Groups
 * (Cheerpipe/ha-relative-light-group) both list their members in the
 * `entity_id` attribute, and a member can be a group itself. The WLED
 * lights at the bottom of the tree are its leaves.
 */
import type { HomeAssistant } from "./ha/types";

/** Changes colors and effects of its members that are on only. */
export const RELATIVE_GROUP = "relative_light_group";

/** A segment light of the WLED integration (not the main light). */
export const isSegmentLight = (
  hass: HomeAssistant,
  entityId: string,
): boolean => {
  const entry = hass.entities?.[entityId];
  return (
    entityId.startsWith("light.") &&
    entry?.platform === "wled" &&
    entry.translation_key === "segment"
  );
};

/** Members of a light group, when the entity is one. */
export const groupMembers = (
  hass: HomeAssistant,
  entityId: string,
): string[] | undefined => {
  if (!entityId.startsWith("light.")) return undefined;
  if (hass.entities?.[entityId]?.platform === "wled") return undefined;
  const members = hass.states[entityId]?.attributes.entity_id;
  return Array.isArray(members) && members.length
    ? members.map(String)
    : undefined;
};

/**
 * Every WLED segment light under a group, in order and without repeats;
 * undefined when the entity isn't a group whose leaves are all WLED
 * segment lights (another light, the WLED main light, a loop).
 */
export const segmentLeaves = (
  hass: HomeAssistant,
  entityId: string,
  path: ReadonlySet<string> = new Set(),
): string[] | undefined => {
  const members = groupMembers(hass, entityId);
  if (!members || path.has(entityId)) return undefined;
  const inside = new Set(path).add(entityId);
  const leaves: string[] = [];
  for (const member of members) {
    const found = isSegmentLight(hass, member)
      ? [member]
      : segmentLeaves(hass, member, inside);
    if (!found) return undefined;
    for (const leaf of found) if (!leaves.includes(leaf)) leaves.push(leaf);
  }
  return leaves;
};

const isOn = (hass: HomeAssistant, entityId: string) =>
  hass.states[entityId]?.state === "on";

/**
 * The leaves a change reaches, following each group's own rule: a light
 * group changes all its members, a Relative Light Group only the members
 * that are on (all of them when every member is off).
 */
export const writeLeaves = (
  hass: HomeAssistant,
  entityId: string,
  path: ReadonlySet<string> = new Set(),
): string[] => {
  if (isSegmentLight(hass, entityId)) return [entityId];
  const members = groupMembers(hass, entityId);
  if (!members || path.has(entityId)) return [];
  const inside = new Set(path).add(entityId);
  let reached = members;
  if (hass.entities?.[entityId]?.platform === RELATIVE_GROUP) {
    const on = members.filter((member) => isOn(hass, member));
    if (on.length) reached = on;
  }
  const leaves: string[] = [];
  for (const member of reached) {
    for (const leaf of writeLeaves(hass, member, inside)) {
      if (!leaves.includes(leaf)) leaves.push(leaf);
    }
  }
  return leaves;
};

/** The leaf shown: the first one written that is on, else the first one. */
export const shownLeaf = (
  hass: HomeAssistant,
  leaves: string[],
): string | undefined => leaves.find((leaf) => isOn(hass, leaf)) ?? leaves[0];
