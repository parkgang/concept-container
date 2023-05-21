import { Suspense } from "react";

import View2 from "../components/View2";
import Loading from "../components/Loading";

export default function Home2() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <View2 />
      </Suspense>
    </>
  );
}
