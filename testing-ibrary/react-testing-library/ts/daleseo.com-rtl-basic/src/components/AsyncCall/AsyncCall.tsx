import axios from "axios";
import { useQuery } from "react-query";

type Dummy = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  id: number;
};

export default function AsyncCall({ id }: Props) {
  const { data } = useQuery(["Dummy", id], async () => {
    const res = await axios.get<Dummy>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return res.data;
  });

  if (data === undefined) {
    throw new Error(`Dummy 데이터가 undefined 입니다.`);
  }

  return (
    <>
      <h1>AsyncCall</h1>
      <span>userId: {data.userId}</span> <br />
      <span>id: {data.id}</span> <br />
      <span>title: {data.title}</span> <br />
      <span>completed: {data.completed}</span> <br />
      <span>json: {JSON.stringify(data)}</span> <br />
    </>
  );
}
