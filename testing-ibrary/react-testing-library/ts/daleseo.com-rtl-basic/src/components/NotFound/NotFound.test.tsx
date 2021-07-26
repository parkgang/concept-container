import { render } from "@testing-library/react";

import NotFound from "./NotFound";

describe("<NotFound />", () => {
  test("renders header", () => {
    const { getByText } = render(<NotFound path="/abc" />);
    const paragraph = getByText(/^해당 페이지/);
    expect(paragraph).toHaveTextContent(
      "해당 페이지(/abc)를 찾을 수 없습니다."
    );
  });
});
