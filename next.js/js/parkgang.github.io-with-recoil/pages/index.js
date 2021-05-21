import { useRecoilState } from "recoil";

import Router from "../components/Router";

import { pageNameState } from "../states";

function IndexPage() {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  function handleOnClick() {
    setPageName("IndexPage");
  }

  return (
    <div>
      <div>
        <h1>IndexPage</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button onClick={handleOnClick}>현재 페이지 이름으로 상태 변경</button>
      </div>
      <hr />
      <Router />
    </div>
  );
}

export default IndexPage;
