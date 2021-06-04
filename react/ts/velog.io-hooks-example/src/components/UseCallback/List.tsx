import { useState, useEffect } from "react";

type Props = {
  getItems(): any;
};

function List({ getItems }: Props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("숫자가 변동되었습니다.");
  }, [getItems]);
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}

export default List;
