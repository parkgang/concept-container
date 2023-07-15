import type { GetServerSideProps } from "next";
import Image from "next/image";

type PageProps = {
  ssrFinalizedDisplayDate: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  // prefetch과 관련 없이 SSR이 잘 이뤄지는지 보기위해서 의도적으로 기다립니다.
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  });

  return {
    props: {
      ssrFinalizedDisplayDate: new Date().toLocaleString("ko-KR"),
    },
  };
};

export default function SsrPage({
  ssrFinalizedDisplayDate: nowDateIso,
}: PageProps) {
  return (
    <div>
      <h1>SSR Page!</h1>
      <p>
        SSR이 완료된 시점은 <strong>{nowDateIso}</strong> 입니다.
      </p>
      <Image
        src="/api/slow-image"
        alt="아주 느리게 서빙되는 이미지"
        width={473}
        height={966}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}
