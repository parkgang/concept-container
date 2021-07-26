export function areAnagrams(first, second) {
  const counter = {};
  for (const ch of first) {
    counter[ch] = (counter[ch] || 0) + 1;
  }
  for (const ch of second) {
    counter[ch] = (counter[ch] || 0) - 1;
  }

  return Object.values(counter).every((cnt) => cnt == 0);
}
