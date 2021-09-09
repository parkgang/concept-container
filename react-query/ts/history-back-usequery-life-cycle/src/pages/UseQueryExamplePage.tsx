import { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { useCounter } from "hooks/useCounter";

async function Api() {
  const endPoint = "https://api.github.com/repos/tannerlinsley/react-query";
  const { data } = await axios.get(endPoint);
  return data;
}

export default function UseQueryExamplePage() {
  const [count, SetCountUp, SetCountDown] = useCounter();

  const { isLoading, isError, data, error } = useQuery<any, Error>(
    "repoData",
    Api,
    {
      onSuccess() {
        console.log(`Api 호출 완료`);
      },
    }
  );

  console.log(`<UseQueryExamplePage /> ReRender`);

  useEffect(() => {
    console.log(`<UseQueryExamplePage /> Mount`);
  });

  useEffect(() => {
    console.log(`<UseQueryExamplePage /> componentDidMount`);
  }, []);

  if (isLoading) {
    return (
      <>
        <span>Loading...</span>
      </>
    );
  }

  if (isError) {
    if (error) {
      return (
        <>
          <span>An error has occurred: </span>
          <span>{error.message}</span>
        </>
      );
    }
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <hr />
      <h3>{count}</h3>
      <button onClick={SetCountUp}>+1</button>
      <button onClick={SetCountDown}>-1</button>
    </div>
  );
}
