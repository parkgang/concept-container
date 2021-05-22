import { useRecoilState } from "recoil";

import LoadableSample from "../components/LoadableSample";
import Router from "../components/Router";

import { pageNameState } from "../states";

function LoadablePage() {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  function HandleOnClick() {
    setPageName("LoadablePage");
  }

  return (
    <div>
      <div>
        <h1>LoadablePage</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button onClick={HandleOnClick}>현재 페이지 이름으로 상태 변경</button>
      </div>
      <LoadableSample />
      <h1 />
      <Router />
    </div>
  );
}

export default LoadablePage;
