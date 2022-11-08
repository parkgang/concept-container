import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
// ℹ️ Type-only import: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
import type { AppRouter } from "src/server/routers/_app";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        // 개발 중인 콘솔에 예쁜 로그를 추가하고 프로덕션에서 오류를 기록합니다.
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `http://localhost:${process.env.PORT ?? 3000}/api/trpc`,
        }),
      ],
    };
  },
  ssr: true,
  // TODO: SSR 관련 헤더처리 구성이 있는데 굳이 필요하지 않은 것 같아 삭제하긴 함 어떤 것인지 추가적으로 살펴보기
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
