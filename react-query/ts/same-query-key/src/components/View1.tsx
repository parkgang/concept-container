import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import View2 from "../components/View2";

import { View1Api } from "../libs/api";

export default function View1() {
  const [flag, setFlag] = useState<boolean>(false);

  const { data } = useQuery("View1Api", View1Api, {
    staleTime: 1000 * 1,
    cacheTime: 1000 * 5,
    onSuccess() {
      console.log(`View1 onSuccess`);
    },
    onSettled() {
      console.log(`View1 onSettled`);
    },
  });

  useEffect(() => {
    console.log(`View1 처음 마운트`);
  }, []);

  return (
    <>
      <h1>View1</h1>
      {JSON.stringify(data)}
      <br />
      <button
        onClick={() => {
          setFlag((x) => !x);
        }}
      >
        View2 렌더링 시작
      </button>
      <hr />
      {flag && <View2 />}
    </>
  );
}
