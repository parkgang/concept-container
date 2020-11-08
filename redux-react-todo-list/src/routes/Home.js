import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

// parameter가 props를 의미함
function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// 어떤 값을 return하더라도 현재 component의 props에 추가된다.
// state    : Redux store로 부터 바인딩 된 component에 state를 가져다 줍니다.(props 전달)
// ownProps : react-router에 의해 Home component에 준 props들 입니다.
/* 바인딩 된 component에 store의 state를 전달해 주는 함수(store.getState())*/
function mapStateToProps(state) {
  return { toDos: state };
}

/* 바인딩 된 component에서 dispatch 사용 해주는 함수, 해당 function은 props로 전달됨 */
function mapDispatchToProps(dispatch) {
  return {
    // dispatch 호출
    addToDo: (text) => {
      dispatch(actionCreators.addToDo(text));
    },
  };
}

// connect()는 Home component으로 보내주는 props에 추가될 수 있도록 허용해 줌
// 현재로써는 react-router와 mapStateToProps의 props를 가지고 있다.
// connection은 2개의 argument를 가진다. state나 dispatch 둘 중에 고를 수 있기 떄문
// dispatch만 하고 싶으면 connect(null, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
