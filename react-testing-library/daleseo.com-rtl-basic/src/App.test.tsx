import { render, screen } from "@testing-library/react";

import App from "./App";

test("hello React Testing Library header", () => {
  render(<App />);
  const h1Element = screen.getByText("React Testing Library");
  expect(h1Element).toBeInTheDocument();
});
