import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getHello2 } from "lib/api/hello";
import Link from "next/link";

const queryKey = ["hello2"];
const queryFn = getHello2;

export default function Test(props: any) {
  const query = useQuery<{ name: string }>(queryKey, queryFn);

  return (
    <>
      <h1>Test Page</h1>
      <Link href={"/profile-sg"}>SSG</Link>
      <br />
      <Link href={"/profile-ssr"}>SSR</Link>
      <br />
      <hr />
      <p>{query.data?.name}</p>
      <p>{props.testGlobalProps}</p>
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
