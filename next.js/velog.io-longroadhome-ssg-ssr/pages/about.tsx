import { GetStaticPropsResult } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

import type { Post } from "types/jsonplaceholder-posts";

type PreRenderingMode = "ssg" | "ssr";
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
  const [mode, setMode] = useState<PreRenderingMode>("ssg");

  const endPoint = mode === "ssg" ? "detail-static" : "detail";

  function handleMode(mode: PreRenderingMode) {
    return () => setMode(mode);
  }

  // CSR 예제 코드
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
    <main>
      <section>
        <b>pre-rendering: {mode}</b>
        <br />
        <button onClick={handleMode("ssg")}>SSG으로 변경</button>
        <button onClick={handleMode("ssr")}>SSR으로 변경</button>
      </section>
      <section>
        <h1>여기는 About 페이지요!</h1>
        {list.length &&
          list.slice(0, 10).map((item) => (
            <li key={item.id}>
              <Link href={`${endPoint}/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </section>
    </main>
  );
}
