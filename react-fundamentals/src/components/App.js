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
 * State는 무조건 setState를 통해서만 변경이 가능하다.
 *    - State 내부의 배열에 변화를 주기 위해서 Array.push()와 같은 배열 자체를 변경하는건 안된다.
 *    - .concat()와 같은 함수로 값을 추가하고 그 결과를 새로운 배열 값으로 설정하면 된다.
 *    - .concat()은 기존 배열을 그래도 두고 새로운 배열을 생성합니다.
 *    - 이외의 방법으로 FaceBook library의 "Immutability Helper": 기존 데이터 복사하고 복사된 데이터를 쉽게 수정하고 결과를 반환함
 *    - ES6의 "Spread 문법"을 사용해도 된다.: 사용하기 위해서는 "babel-preset-stage-0"를 설치하고 적용해야 한다.
 * # 4-5
 * 이벤트는 하나만 catch가 가능하므로 여러개를 하기 위해선 Empty 객체에 삽입하도록 한다: "ContactCreate.js"의 "handleChange(e)"함수 참고
 * # 4-6
 * this.setState는 비동기이라서 값이 변경되지 않는 것처럼 보일 수 있다.
 * 값을 수정할 때 부모에게 받은 props를 현 컴포넌트의 state 넣은 후 가지고 놀다가 부모에게 반영해야 할 때는 부모에게 전달받은 함수를 통해 전달함
 * # 4-7
 * ref를 사용 전 ref를 사용해야 되는지 생각하고 사용하기(예: Focus 같은 경우는 ref 말고는 대체 불가능))
 * ref를 이용하여 부모 컴포넌트에 접근할 수 있으며 메소드도 실행할 수 있다.
 */
