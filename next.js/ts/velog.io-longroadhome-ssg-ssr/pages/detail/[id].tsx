import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import axios from "axios";

import type { Post } from "types/jsonplaceholder-posts";

type Params = {
  id: string;
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<Params>
) {
  const id = ctx.params?.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data: Post = res.data;

  console.log(data); // 해당 콘솔은 어디에서 출력이 되나요?

  return {
    props: {
      item: data,
    },
  };
}

export default function Detail({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="Detail">
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <p>{item.id}번째 게시글</p>
    </div>
  );
}
