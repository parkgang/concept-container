test("spy test", () => {
  const calculator = {
    add: (a, b) => a + b,
    kyungeun: (name) => name + "님 안녕하세요!",
  };

  const spyFn1 = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyFn1).toBeCalledTimes(1);
  expect(spyFn1).toBeCalledWith(2, 3);
  expect(result).toBe(5);

  const spyFn2 = jest.spyOn(calculator, "kyungeun");
  expect(spyFn2).toBeCalledTimes(0);
  expect(spyFn2("테스트")).toBe("테스트님 안녕하세요!");
});
