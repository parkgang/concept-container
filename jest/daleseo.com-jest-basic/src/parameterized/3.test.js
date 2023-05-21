import { areAnagrams } from "./index.js";

describe.each([
  ["Cat", "Act"],
  ["Save", "Vase"],
  ["Elbow", "Below"],
])("areAnagrams(%s, %s)", (first, second) => {
  it("return true with ignoreCase option", () => {
    expect(areAnagrams(first, second, { ignoreCase: true })).toBe(true);
  });

  it("return false without ignoreCase option", () => {
    expect(areAnagrams(first, second)).toBe(false);
  });
});

describe.each([
  ["dormitory", "dirty room"],
  ["conversation", "voices rant on"],
])("areAnagrams(%s, %s)", (first, second) => {
  it("return true with ignoreSpaces option", () => {
    expect(areAnagrams(first, second, { ignoreSpaces: true })).toBe(true);
  });

  it("return false without ignoreSpaces option", () => {
    expect(areAnagrams(first, second)).toBe(false);
  });
});
