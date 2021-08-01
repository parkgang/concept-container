import { useQuery } from "react-query";

import { View3Api } from "../libs/api";

export default function View3() {
  const { data } = useQuery("View1Api", {
    staleTime: 1000 * 5,
  });

  return (
    <>
      <h1>View3</h1>
      {JSON.stringify(data)}
    </>
  );
}
