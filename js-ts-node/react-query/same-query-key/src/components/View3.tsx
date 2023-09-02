import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { CommonApi } from "../types/api";

import { View3Api } from "../libs/api";

export default function View3() {
  const [, setFlag] = useState<boolean>(false);

  const { data } = useQuery<CommonApi>("View1Api", View3Api, {
    cacheTime: 1000 * 7,
    onSuccess(data) {
      console.log(`View3 onSuccess`);
      data.name = "View3의 onSuccess() 에서 변경한 이름";
    },
    onSettled() {
      console.log(`View3 onSettled`);
    },
  });

  useEffect(() => {
    console.log("View3 처음 마운트");
  }, []);

  return (
    <>
      <h1>View3</h1>
      {JSON.stringify(data)}
      <br />
      <button
        onClick={() => {
          setFlag((x) => !x);
        }}
      >
        그냥 디버깅을 위한 상태 변화
      </button>
      <hr />
    </>
  );
}
