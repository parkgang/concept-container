const mockFn = jest.fn();

test("어떤 값을 리턴해야할지 아직 알려주지 않았기 때문에 모두 undefined", () => {
  console.log(mockFn()); // undefined
  console.log(mockFn(1)); // undefined
  console.log(mockFn("a")); // undefined
  console.log(mockFn([1, 2], { a: "b" })); // undefined
});

test("mockReturnValue(리턴 값) 함수를 이용해서 가짜 함수가 어떤 값을 리턴해야할지 설정", () => {
  mockFn.mockReturnValue("I am a mock!");
  console.log(mockFn()); // I am a mock!
});

test("mockResolvedValue(Promise가 resolve하는 값) 함수를 이용하면 가짜 비동기 함수를 만들기", () => {
  mockFn.mockResolvedValue("I will be a mock!");
  mockFn().then((result) => {
    console.log(result); // I will be a mock!
  });
});

test("mockImplementation(구현 코드) 함수를 이용하면 아예 해당 함수를 통째로 즉석해서 재구현", () => {
  mockFn.mockImplementation((name) => `I am ${name}!`);
  console.log(mockFn("Dale")); // I am Dale!
});

test("가짜 함수는 자신이 어떻게 호출되었는지를 모두 기억한다는 점입니다. 한번 조회 해보도록 합니다.", () => {
  mockFn("a");
  mockFn(["b", "c"]);

  // 가짜 함수 용 설계된 Jest Matcher인 toBeCalled*** 함수를 사용하면 가짜 함수가 몇번 호출되었고 인자로 무엇이 넘어왔었는지를 검증할 수 있습니다.
  expect(mockFn).toBeCalledTimes(9);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith(["b", "c"]);
});
