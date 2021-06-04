import { useState } from "react";

import List from "./List";

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  function getItems() {
    return [number, number + 1, number + 2];
  }

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>테마 변경</button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
