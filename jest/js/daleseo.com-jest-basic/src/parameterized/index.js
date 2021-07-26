export function areAnagrams(
  first,
  second,
  options = { ignoreCase: false, ignoreSpaces: false }
) {
  if (options.ignoreCase) {
    first = first.toLowerCase();
    second = second.toLowerCase();
  }

  if (options.ignoreSpaces) {
    first = first.replace(/ /g, "");
    second = second.replace(/ /g, "");
  }

  const counter = {};
  for (const ch of first) {
    counter[ch] = (counter[ch] || 0) + 1;
  }
  for (const ch of second) {
    counter[ch] = (counter[ch] || 0) - 1;
  }

  return Object.values(counter).every((cnt) => cnt == 0);
}
