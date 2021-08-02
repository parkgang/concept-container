import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import View3 from "../components/View3";

import { View2Api } from "../libs/api";

export default function View2() {
  const [flag, setFlag] = useState<boolean>(false);

  const { data } = useQuery("View1Api", View2Api, {
    cacheTime: 1000 * 6,
    onSuccess() {
      console.log(`View2 onSuccess`);
    },
    onSettled() {
      console.log(`View2 onSettled`);
    },
  });

  useEffect(() => {
    console.log("View2 처음 마운트");
  }, []);

  return (
    <>
      <h1>View2</h1>
      {JSON.stringify(data)}
      <br />
      <button
        onClick={() => {
          setFlag((x) => !x);
        }}
      >
        View3 렌더링 시작
      </button>
      <hr />
      {flag && <View3 />}
    </>
  );
}
