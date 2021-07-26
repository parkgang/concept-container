import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("[user-event] enables button when both email and password are entered", () => {
    render(<LoginForm onSubmit={handleOnSubmit} />);

    const email = screen.getByLabelText("이메일");
    const password = screen.getByLabelText("비밀번호");
    const button = screen.getByRole("button");

    expect(button).toBeDisabled(); // 버튼 비활성화

    userEvent.type(email, "user@test.com");
    userEvent.type(password, "Test1234");

    expect(button).toBeEnabled(); // 버튼 활성화
  });
});
