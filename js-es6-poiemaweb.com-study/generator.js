function* gen() {
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1); // 4

  let ask2 = yield "3 * 3 = ?";

  console.log(ask2); // 9
}

let generator = gen();

console.log(generator.next().value); // "2 + 2 = ?"

console.log(generator.next(4).value); // "3 * 3 = ?"

console.log(generator.next(9).done); // true
