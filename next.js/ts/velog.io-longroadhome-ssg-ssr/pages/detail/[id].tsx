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

/**
 * 위와 동일한 코드인데 CSR으로 처리하는 코드
 */
/*
export default function Detail() {
  const [item, setItem] = useState<Post>();

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    (async () => {
      // router.query의 경우 마운트되지 않으면 조회되지 않는 것으로 확인됩니다.
      if (id) {
        console.log(id);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setItem(data);
      }
    })();
  }, [id]);

  if (item) {
    return (
      <div className="Detail">
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <p>{item.id}번째 게시글</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Loading...</h3>
    </div>
  );
}
*/
