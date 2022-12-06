import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
// [Type-only import](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)
import type { AppRouter } from "src/trpc/routers/_app";

function getBaseUrl() {
  // 브라우저는 상대 경로를 사용할 수 있도록
  if (typeof window !== "undefined") {
    return "";
  }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

/**
 * 개발 중인 콘솔에 예쁜 로그를 추가하고 프로덕션에서 오류를 기록합니다.
 */
const consoleLoggerLink = loggerLink({
  enabled: (opts) =>
    process.env.NODE_ENV === "development" ||
    (opts.direction === "down" && opts.result instanceof Error),
});

export const vanillaTrpc = createTRPCProxyClient<AppRouter>({
  links: [
    consoleLoggerLink,
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        consoleLoggerLink,
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: true,
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
