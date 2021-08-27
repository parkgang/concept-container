import { CSSProperties, lazy, Suspense } from "react";

export type Props = {
  src: string;
  name: string;
};

// 이미지를 그리는 컴포넌트를 lazy 시켰습니다. lazy는 동적 import를 사용하는 함수를 인자로 넣어줘야합니다.
const LazyImage = lazy(() => import("./LazyImage"));

export default function LazyItem({ src, name }: Props) {
  const divStyle: CSSProperties = {
    border: "0.2rem solid",
    textAlign: "center",
    margin: "1rem",
    fontSize: "1.5rem",
  };

  return (
    <>
      <div style={divStyle}>
        {/* 컴포넌트가 다 불러오기 전까지 ...loading이라는 컴포넌트를 보여줍니다. Suspense를 사용하지 않으면 에러가 납니다. */}
        <Suspense fallback={<div>...loading</div>}>
          {/* 다 불러와지면 해당 컴포넌트를 보여줍니다. */}
          <LazyImage src={src} name={name} />
        </Suspense>
        <br />
        {name}
      </div>
    </>
  );
}
