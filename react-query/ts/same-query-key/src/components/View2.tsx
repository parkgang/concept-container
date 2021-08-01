import { useQuery } from "react-query";

import { View2Api } from "../libs/api";

export default function View2() {
  const { data } = useQuery("View1Api", View2Api, {
    cacheTime: 1000 * 10,
  });

  return (
    <>
      <h1>View2</h1>
      {JSON.stringify(data)}
    </>
  );
}
