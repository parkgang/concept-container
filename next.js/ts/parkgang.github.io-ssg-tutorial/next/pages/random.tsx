import type { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

type RandomImage = {
  message: string;
  status: string;
};
type Props = {
  data: RandomImage;
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const endPoint = `https://dog.ceo/api/breeds/image/random`;
  const { data } = await axios.get<RandomImage>(endPoint);

  return {
    props: {
      data,
    },
  };
}

export default function RandomPage({ data }: Props) {
  const router = useRouter();

  return (
    <>
      <h1>RandomPage</h1>
      <h3>{data.status}</h3>
      <div style={{ border: "2px solid black" }}>
        <Image src={data.message} alt="에러" width="500px" height="500px" />
      </div>
      <br />
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}
