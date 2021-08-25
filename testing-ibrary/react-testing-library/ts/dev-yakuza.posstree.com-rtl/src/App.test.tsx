import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const minusButton = screen.getByText("-");
    expect(minusButton).toBeInTheDocument();
    expect(minusButton).toHaveStyleRule("background-color", "#FF1744");

    const plusButton = screen.getByText("+");
    expect(plusButton).toBeInTheDocument();
    expect(plusButton).toHaveStyleRule("background-color", "#304FFE");

    const label = screen.getByText("0");
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("clicks minus button", () => {
    render(<App />);

    const minusButton = screen.getByText("-");

    const label = screen.getByText("0");
    expect(label).toBeInTheDocument();

    fireEvent.click(minusButton);
    expect(label.textContent).toBe("-1");

    fireEvent.click(minusButton);
    expect(label.textContent).toBe("-2");
  });

  it("clicks plus button", () => {
    render(<App />);

    const plusButton = screen.getByText("+");

    const label = screen.getByText("0");
    expect(label).toBeInTheDocument();

    fireEvent.click(plusButton);
    expect(label.textContent).toBe("1");

    fireEvent.click(plusButton);
    expect(label.textContent).toBe("2");
  });
});
