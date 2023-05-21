import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen, waitFor } from "@testing-library/react";

import AsyncCall from "./AsyncCall";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 1,
    },
  },
});

describe("<AsyncCall />", () => {
  test("Mount", async () => {
    async function arrangeRender() {
      render(
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div>
                <h1>로딩 중...</h1>
              </div>
            }
          >
            <div data-testid="loading">
              <AsyncCall id={1} />
            </div>
          </Suspense>
        </QueryClientProvider>
      );

      await waitFor(() => {
        expect(screen.getByTestId("loading")).toBeInTheDocument();
      });
    }
    await arrangeRender();
  });
});
