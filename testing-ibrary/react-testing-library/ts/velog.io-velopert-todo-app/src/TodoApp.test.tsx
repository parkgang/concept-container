import React from "react";
import TodoApp from "./TodoApp";
import { render } from "@testing-library/react";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록"); // TodoForm 존재유무 확인
    getByTestId("TodoList"); // TodoList 존재유무 확인
  });
});
