import { useState } from "react";
import { useQueryClient } from "react-query";

export default function GetQueryData() {
  const [, setFlag] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const data = JSON.stringify(queryClient.getQueryData("View1Api"));

  console.log(typeof data);

  return (
    <>
      <h1>GetQueryData</h1>
      {data}
      <br />
      <button
        onClick={() => {
          setFlag((x) => !x);
        }}
      >
        컴포넌트 상태 변화
      </button>
    </>
  );
}
