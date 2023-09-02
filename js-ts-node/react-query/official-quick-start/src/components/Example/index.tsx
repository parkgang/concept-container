import { useQuery } from "react-query";
import axios from "axios";

async function Api() {
  const endPoint = "https://api.github.com/repos/tannerlinsley/react-query";
  const { data } = await axios.get(endPoint);
  return data;
}

function Example() {
  const { isLoading, isError, data, error } = useQuery<any, Error>("repoData", Api);

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
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong> <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default Example;
