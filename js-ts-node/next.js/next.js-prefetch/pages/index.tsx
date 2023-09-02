import Head from "next/head";
import Link from "next/link";

/**
 * 의도적으로 viewport에 보이지 않도록 높이를 조절하기 위한 컴포넌트 입니다.
 */
function HeightSpacing({ height }: { height: number }) {
  return <div style={{ height: height }} />;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.js prefetch</h1>
        <p>
          의도적으로 viewport에 표시되지 않도록 감쳐놓았음으로 스크롤을 내려서
          어떻게 동작하는지 확인하세요.
        </p>
        <HeightSpacing height={1500} />
        <Link href="ssg-page">SSG page으로 이동</Link>
        <HeightSpacing height={1500} />
        <Link href="ssr-page">
          SSR page으로 이동 (getServerSideProps에서 일정 시간 지연하므로 TTFB가
          느린 것이 정상입니다)
        </Link>
        <HeightSpacing height={500} />
      </main>
    </>
  );
}
