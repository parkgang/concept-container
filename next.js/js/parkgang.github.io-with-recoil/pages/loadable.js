import { useRecoilState, useRecoilValueLoadable } from "recoil";

import Router from "../components/Router";

import { pageNameState, getNameSelector } from "../states";

function LoadablePage() {
  const [pageName, setPageName] = useRecoilState(pageNameState);
  const name = useRecoilValueLoadable(getNameSelector);

  function HandleOnClick() {
    setPageName("LoadablePage");
  }

  switch (name.state) {
    case "hasValue":
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
          <div>
            <h1>{JSON.stringify(name.contents)}</h1>
          </div>
          <h1 />
          <Router />
        </div>
      );
    case "loading":
      return <h1>Loadable Loading...</h1>;
    case "hasError":
      return <h1>{name.contents}</h1>;
  }
}

export default LoadablePage;
