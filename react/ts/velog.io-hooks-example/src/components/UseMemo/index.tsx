import { useState } from "react";

import ShowState from "./ShowState";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  function increaseNumber() {
    setNumber((prevState) => prevState + 1);
  }
  function decreaseNumber() {
    setNumber((prevState) => prevState - 1);
  }
  function onChangeTextHandler(e: any) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        <input type="text" placeholder="Last Name" onChange={onChangeTextHandler} />
      </div>
      <ShowState number={number} text={text} />
    </div>
  );
}

export default UseMemo;
