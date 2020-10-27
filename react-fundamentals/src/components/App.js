import { hot } from "react-hot-loader";
import React from "react";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return <Contact />;
  }
}

export default hot(module)(App);

/*
 * 파일명과 Component Name이 같아야 디버깅에 용이하다
 * 이벤트 처리 함수는 하위 Component의 props를 함수로 전달시켜 실행한다
 */
