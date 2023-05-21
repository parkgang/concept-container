import { useState, useCallback } from "react";

import List from "./List";

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  // useCallback 미사용
  // function getItems() {
  //   return [number, number + 1, number + 2];
  // }

  // useCallback 사용
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>테마 변경</button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
