import { Suspense } from "react";

import View3 from "../components/View3";
import Loading from "../components/Loading";

export default function Home3() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <View3 />
      </Suspense>
    </>
  );
}
