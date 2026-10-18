/** Same contract as HA's `fireEvent` (`src/common/dom/fire_event.ts`). */
export const fireEvent = <T = unknown>(
  node: EventTarget,
  type: string,
  detail?: T,
  options: { bubbles?: boolean; cancelable?: boolean; composed?: boolean } = {},
): CustomEvent<T> => {
  const event = new CustomEvent<T>(type, {
    bubbles: options.bubbles ?? true,
    cancelable: options.cancelable ?? false,
    composed: options.composed ?? true,
    detail: (detail === null || detail === undefined ? {} : detail) as T,
  });
  node.dispatchEvent(event);
  return event;
};
