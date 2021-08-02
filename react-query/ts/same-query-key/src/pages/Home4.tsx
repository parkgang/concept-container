import { Suspense } from "react";

import View1 from "../components/View1";
import Loading from "../components/Loading";
import GetQueryData from "../components/GetQueryData";

export default function Home4() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <View1 />
        <GetQueryData />
      </Suspense>
    </>
  );
}
