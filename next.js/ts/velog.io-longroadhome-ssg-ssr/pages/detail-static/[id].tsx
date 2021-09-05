import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
import axios from "axios";

import type { Post } from "types/jsonplaceholder-posts";

type Props = {
  item: Post;
};

type Params = {
  id: string;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<Params>
): Promise<GetStaticPropsResult<Props>> {
  const id = ctx.params?.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}

export default function DetailStatic({ item }: Props) {
  return (
    <div>
      {item && (
        <div className="Detail">
          <h1 style={{ color: "#fff" }}>with Static Generation</h1>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <p>{item.id}번째 게시글</p>
        </div>
      )}
    </div>
  );
}
