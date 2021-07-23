import { jest } from "@jest/globals";

import axios from "axios";
import * as userService from "./userService.js";

test("여기서 추가한 목함수와 스파이가", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: "Dale Seo",
    },
  });

  const spyGet = jest.spyOn(axios, "get");
  const user = await userService.findOne(1);

  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Dale Seo");
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});

test("여기서도 똑같이 조회되네", async () => {
  const spyGet = jest.spyOn(axios, "get");

  // 이미 상단의 test 함수에서 목 함수를 만들었기 때문에 이런 호출이 가능합니다.
  const res = await axios.get();
  console.log(res); // { data: { id: 1, name: 'Dale Seo' } }

  // 이미 상단의 test 함수에서 스파이를 붙이고 userService.findOne(1);에서 axios.get() 호출한 적이 있음으로 2회 호출이 맞습니다.
  expect(spyGet).toBeCalledTimes(2);
});
