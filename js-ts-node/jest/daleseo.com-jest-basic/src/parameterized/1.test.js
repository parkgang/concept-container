import { areAnagrams } from "./index.js";

test("car and bike are not anagrams", () => {
  expect(areAnagrams("car", "bike")).toBe(false);
});

test("car and arc are anagrams", () => {
  expect(areAnagrams("car", "arc")).toBe(true);
});

test("cat and dog are not anagrams", () => {
  expect(areAnagrams("cat", "dog")).toBe(false);
});

test("cat and act are anagrams", () => {
  expect(areAnagrams("cat", "act")).toBe(true);
});
