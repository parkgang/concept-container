import axios from "axios";
import { useQuery } from "react-query";

export default function AsyncCall() {
  const { data } = useQuery("todos", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return res.data;
  });

  return (
    <>
      <h1>AsyncCall</h1>
      {JSON.stringify(data)}
    </>
  );
}
