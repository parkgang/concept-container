import { useQuery } from "react-query";

import { View1Api } from "../libs/api";

export default function View1() {
  const { data } = useQuery("View1Api", View1Api, {
    staleTime: 1000 * 30,
    cacheTime: 1000 * 5,
  });

  return (
    <>
      <h1>View1</h1>
      {JSON.stringify(data)}
    </>
  );
}
