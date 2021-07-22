const axios = require("axios");
const userService = require("./userService");

test("findOne fetches data from the API endpoint", async () => {
  const spyGet = jest.spyOn(axios, "get");
  await userService.findOne(1);
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});
