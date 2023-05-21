import { areAnagrams } from "./index.js";

test.each([
  ["cat", "bike", false],
  ["car", "arc", true],
  ["cat", "dog", false],
  ["cat", "act", true],
])("areAnagrams(%s, %s) returns %s", (first, second, expected) => {
  expect(areAnagrams(first, second)).toBe(expected);
});
