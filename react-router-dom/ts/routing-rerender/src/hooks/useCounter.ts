import { useState } from "react";

export function useCounter(): [number, () => void, () => void] {
  const [count, setCount] = useState<number>(0);

  function handleCount(value: number) {
    return () => setCount((prev) => prev + value);
  }

  return [count, handleCount(+1), handleCount(-1)];
}
