import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe("Header", () => {
  test('"How it works" link points to the correct page', () => {
    setup();
    const link = screen.getByRole("link", { name: /how it works/i });
    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /how it works/i })
    ).toBeInTheDocument();
  });
});

describe("Subreddit form", () => {
  test("loads posts and renders them on the page", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: {
              children: [{}, {}],
            },
          }),
      })
    );

    setup();

    const subredditInput = screen.getByLabelText("r /");
    userEvent.type(subredditInput, "reactjs");

    const submitButton = screen.getByRole("button", { name: /search/i });
    userEvent.click(submitButton);

    const loadingMessage = screen.getByText(/is loading/i);
    expect(loadingMessage).toBeInTheDocument();

    const numberOfTopPosts = await screen.findByText(/number of top posts:/i);
    expect(numberOfTopPosts).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith(
      "https://www.reddit.com/r/reactjs/top.json"
    );
  });
});
