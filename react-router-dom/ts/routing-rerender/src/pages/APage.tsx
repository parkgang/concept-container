import { useEffect } from "react";

import { useCounter } from "hooks/useCounter";

export default function APage() {
  const [count, SetCountUp, SetCountDown] = useCounter();

  console.log(`<APage /> ReRender`);

  useEffect(() => {
    console.log(`<APage /> Mount`);
  });

  useEffect(() => {
    console.log(`<APage /> componentDidMount`);
  }, []);

  return (
    <>
      <h1>APage</h1>
      <h3>{count}</h3>
      <button onClick={SetCountUp}>+1</button>
      <button onClick={SetCountDown}>-1</button>
    </>
  );
}
