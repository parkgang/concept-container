import { useEffect } from "react";

import { useCounter } from "hooks/useCounter";

export default function CPage() {
  const [count, SetCountUp, SetCountDown] = useCounter();

  console.log(`<CPage /> ReRender`);

  useEffect(() => {
    console.log(`<CPage /> Mount`);
  });

  useEffect(() => {
    console.log(`<CPage /> componentDidMount`);
  }, []);

  return (
    <>
      <h1>CPage</h1>
      <h3>{count}</h3>
      <button onClick={SetCountUp}>+1</button>
      <button onClick={SetCountDown}>-1</button>
    </>
  );
}
