/** Home Assistant frontend internals the card waits for. */

export const isDefined = (tag: string): boolean =>
  customElements.get(tag) !== undefined;

export const whenDefined = async (
  tag: string,
  timeout = 5000,
): Promise<boolean> => {
  if (isDefined(tag)) return true;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const result = await Promise.race([
    customElements.whenDefined(tag).then(() => true),
    new Promise<boolean>((resolve) => {
      timer = setTimeout(() => resolve(false), timeout);
    }),
  ]);
  clearTimeout(timer);
  return result;
};
