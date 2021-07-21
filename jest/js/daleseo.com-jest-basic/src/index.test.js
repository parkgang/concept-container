const userService = require("./userService");
const data = require("./data");

test("find all users", () => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );

  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

test("create a user", () => {
  const user = { id: "4", email: "user4@test.com" };

  userService.create(user);

  expect(data.users).toHaveLength(1);
  expect(data.users).toContainEqual(user);
});
