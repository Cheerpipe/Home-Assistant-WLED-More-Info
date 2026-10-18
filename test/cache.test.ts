import { describe, expect, it, vi } from "vitest";
import { LoadCache } from "../src/wled/cache";

describe("LoadCache", () => {
  it("shares one load and keeps the value for synchronous reads", async () => {
    const cache = new LoadCache<number>();
    const load = vi.fn().mockResolvedValue(1);
    expect(cache.peek("a")).toBeUndefined();
    await Promise.all([cache.get("a", load), cache.get("a", load)]);
    expect(load).toHaveBeenCalledOnce();
    expect(cache.peek("a")).toBe(1);
    cache.set("a", 2);
    expect(cache.peek("a")).toBe(2);
  });

  it("retries after a failure", async () => {
    const cache = new LoadCache<number>();
    await expect(
      cache.get("a", () => Promise.reject(new Error("offline"))),
    ).rejects.toThrow();
    await expect(cache.get("a", () => Promise.resolve(3))).resolves.toBe(3);
  });
});
