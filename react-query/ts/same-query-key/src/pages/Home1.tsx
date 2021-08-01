import { Suspense } from "react";

import View1 from "../components/View1";
import Loading from "../components/Loading";

export default function Home1() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <View1 />
      </Suspense>
    </>
  );
}
