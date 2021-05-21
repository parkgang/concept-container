import { useRecoilState } from "recoil";

import SSRSafeSuspense from "../components/SSRSafeSuspense";
import Basic from "../components/Basic";
import Router from "../components/Router";

import { pageNameState } from "../states";

function SuspensePage() {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  function HandleOnClick() {
    setPageName("SuspensePage");
  }

  return (
    <div>
      <div>
        <h1>SuspensePage</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button onClick={HandleOnClick}>현재 페이지 이름으로 상태 변경</button>
      </div>
      <SSRSafeSuspense fallback={<h1>Suspense Loading...</h1>}>
        <Basic />
      </SSRSafeSuspense>
      <h1 />
      <Router />
    </div>
  );
}

export default SuspensePage;
