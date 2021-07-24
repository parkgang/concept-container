function repeat(word, times = 2) {
  let words = [];
  for (let i = 0; i < times; i++) {
    words.push(word);
  }
  return words.join(); // 베열 대신 문자열 반환
}

export default repeat;
