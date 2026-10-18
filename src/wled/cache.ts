/**
 * Page-wide caches of the WLED card. Every more-info opening creates a new
 * card; with these it draws complete right away (links, effects, palettes,
 * the last segment state) and refreshes in the background.
 */
export class LoadCache<T> {
  private readonly _promises = new Map<string, Promise<T>>();

  private readonly _values = new Map<string, T>();

  /** The value once loaded; the same load is shared, failures retried. */
  public get(key: string, load: () => Promise<T>): Promise<T> {
    let promise = this._promises.get(key);
    if (!promise) {
      promise = load();
      this._promises.set(key, promise);
      promise.then(
        (value) => this._values.set(key, value),
        () => this._promises.delete(key),
      );
    }
    return promise;
  }

  /** The loaded value, synchronously, if there is one. */
  public peek(key: string): T | undefined {
    return this._values.get(key);
  }

  /** A newer value (for data that changes, like the segment state). */
  public set(key: string, value: T): void {
    this._values.set(key, value);
  }
}
