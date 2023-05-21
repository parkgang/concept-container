import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  dehydrate,
  DehydratedState,
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { getHello1 } from "../libs/hello";

type PrefetchQueryDehydrate = {
  /**
   * `getInitialProps` 에서 prefetchQuery 값
   */
  dehydratedStateInitial: DehydratedState;
  /**
   * `getServerSideProps` 에서 prefetchQuery 값
   */
  dehydratedStateServerSide: DehydratedState;
};
/**
 * `getInitialProps` 와 `getServerSideProps` 를 사용하는 경우 같은 props key를 사용하면 덮어씌므로 prefetchQuery는 다른 key으로 하고 마지막에 병합하는 함수
 * `getInitialProps` 와 `getServerSideProps` 에서 부모에서 계산된 props를 조회할 수 없는 문제로 이와 같이 디자인됨
 */
function margeDehydrate({
  dehydratedStateInitial,
  dehydratedStateServerSide,
}: PrefetchQueryDehydrate): DehydratedState {
  return {
    mutations: [
      ...(dehydratedStateInitial?.mutations ?? []),
      ...(dehydratedStateServerSide?.mutations ?? []),
    ],
    queries: [
      ...(dehydratedStateInitial?.queries ?? []),
      ...(dehydratedStateServerSide?.queries ?? []),
    ],
  };
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const dehydratedState = margeDehydrate(pageProps);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["hello1"], getHello1);

  return {
    pageProps: {
      testGlobalProps: "test global props",
      dehydratedStateInitial: dehydrate(queryClient),
    },
  };
};
