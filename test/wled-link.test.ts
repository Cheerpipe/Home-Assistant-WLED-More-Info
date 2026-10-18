import { describe, expect, it } from "vitest";
import { parseSegmentUniqueId } from "../src/wled/link";

describe("parseSegmentUniqueId", () => {
  it.each([
    ["48e729941908_0", { mac: "48e729941908", segment: 0 }],
    ["48e729941908_3", { mac: "48e729941908", segment: 3 }],
    // The main light (brightness only) is the bare MAC.
    ["48e729941908", undefined],
  ])("%s → %o", (uniqueId, expected) => {
    expect(parseSegmentUniqueId(uniqueId)).toEqual(expected);
  });
});
