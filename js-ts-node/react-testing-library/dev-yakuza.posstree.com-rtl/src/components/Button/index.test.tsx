import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./index";

describe("<Button />", () => {
  it("renders component correctly", () => {
    const { container } = render(<Button label="button" />);

    const button = screen.getByText("button");
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders component with backgroundColor", () => {
    render(<Button label="button" backgroundColor="#FF1744" />);

    const button = screen.getByText("button");
    expect(button).toHaveStyleRule("background-color", "#FF1744");
  });

  it("clicks", () => {
    const onClick = jest.fn();
    render(<Button label="button" onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);
    const button = screen.getByText("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
