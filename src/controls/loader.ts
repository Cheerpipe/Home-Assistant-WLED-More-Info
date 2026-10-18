import { isDefined, whenDefined } from "../ha/internals";

/**
 * Native more-info controls are lazy chunks. `importMoreInfoControl(domain)`
 * (public card helper) imports the domain's more-info control, which
 * registers its building blocks (state header, state controls, select menu,
 * chips container…). It returns nothing, so wait for the tags themselves.
 */
export const ensureMoreInfoElements = async (
  domain: string,
  tags: string[],
): Promise<boolean> => {
  if (tags.every(isDefined)) return true;
  try {
    const helpers = await window.loadCardHelpers?.();
    helpers?.importMoreInfoControl?.(domain);
  } catch (err) {
    console.warn("[wled-more-info] Could not load", domain, err);
  }
  const results = await Promise.all(tags.map((tag) => whenDefined(tag, 8000)));
  return results.every(Boolean);
};
