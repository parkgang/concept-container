import { useEffect, useState } from "react";
import axios from "axios";

import { Post } from "../types/jsonplaceholder-posts";

export default function About() {
  const [list, setList] = useState<Post[]>([]);

  useEffect(() => {
    const getList = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const data = res.data;
      setList(data);
    };
    getList();
  }, []);

  return (
    <div className="About">
      <h1>여기는 About 페이지요!</h1>
      {list.length &&
        list.slice(0, 10).map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
}
