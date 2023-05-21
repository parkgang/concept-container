import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// props를 props으로 받아오면 모든 props를 조회할 수 있다.
function Detail({ toDo }) {
  return (
    <>
      {
        // ? 으로 (null or undefined)일때 참조를 안해서 err를 안생기게 해줌
        // [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
      }
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  // Or
  // const id = ownProps.match.params.id;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
