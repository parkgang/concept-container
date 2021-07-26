import { render, fireEvent } from "@testing-library/react";

import LoginForm from "./LoginForm";

function handleOnSubmit() {
  console.log(`로그인 Submit`);
}

describe("<LoginForm />", () => {
  test("enables button when both email and password are entered", () => {
    const { getByText, getByLabelText } = render(
      <LoginForm onSubmit={handleOnSubmit} />
    );

    const button = getByText("로그인");
    const email = getByLabelText("이메일");
    const password = getByLabelText("비밀번호");

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "user@test.com" } });
    fireEvent.change(password, { target: { value: "Test1234" } });

    expect(button).toBeEnabled();
  });

  test("submits form when buttion is clicked", () => {
    const onSubmit = jest.fn().mockImplementation(handleOnSubmit);

    const { getByText, getByLabelText } = render(
      <LoginForm onSubmit={onSubmit} />
    );

    const button = getByText("로그인");
    const email = getByLabelText("이메일");
    const password = getByLabelText("비밀번호");

    fireEvent.change(email, { target: { value: "user@test.com" } });
    fireEvent.change(password, { target: { value: "Test1234" } });

    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
