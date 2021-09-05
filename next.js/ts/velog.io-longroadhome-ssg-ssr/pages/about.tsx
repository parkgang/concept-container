import { GetStaticPropsResult } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

import { Post } from "../types/jsonplaceholder-posts";

type Props = {
  list: Post[];
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const res = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const data = res.data;

  console.log(data[1]); // 해당 콘솔은 어디에서 출력이 되나요?

  return {
    props: {
      list: data,
    },
  };
}

export default function About({ list }: Props) {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const getList = async () => {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  //     const data = res.data;
  //     setList(data);
  //   };
  //   getList();
  // }, []);

  return (
    <div className="About">
      <h1>여기는 About 페이지요!</h1>
      {list.length &&
        list.slice(0, 10).map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
}
