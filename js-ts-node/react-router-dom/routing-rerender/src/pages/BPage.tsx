import { useEffect } from "react";

import { useCounter } from "hooks/useCounter";

export default function BPage() {
  const [count, SetCountUp, SetCountDown] = useCounter();

  console.log(`<BPage /> ReRender`);

  useEffect(() => {
    console.log(`<BPage /> Mount`);
  });

  useEffect(() => {
    console.log(`<BPage /> componentDidMount`);
  }, []);

  return (
    <>
      <h1>BPage</h1>
      <h3>{count}</h3>
      <button onClick={SetCountUp}>+1</button>
      <button onClick={SetCountDown}>-1</button>
    </>
  );
}
