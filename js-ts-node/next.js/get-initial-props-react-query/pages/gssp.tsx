import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import Nav from "../components/Nav";
import { getHello2 } from "../libs/hello";

const queryKey = ["hello2"];
const queryFn = getHello2;

export default function Gssp(props: any) {
  const query = useQuery<{ name: string }>(queryKey, queryFn);

  return (
    <>
      <h2>Gssp Page</h2>
      <Nav />
      <hr />
      <p>getServerSideProps 요청이 있는 페이지 입니다.</p>
      <p>
        getInitialProps에서 전달된 props:{" "}
        <span style={{ color: "red" }}>{props.testGlobalProps}</span>
      </p>
      <p>
        getServerSideProps에서 조회된 데이터:{" "}
        <span style={{ color: "red" }}>{query.data?.name}</span>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKey, queryFn);

  return {
    props: {
      dehydratedStateServerSide: dehydrate(queryClient),
    },
  };
}
