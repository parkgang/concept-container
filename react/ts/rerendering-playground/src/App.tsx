import { useState } from "react";

function Test1({ value }: any) {
  return (
    <>
      <article>
        <h1>Test1</h1>
        {JSON.stringify(value)}
        <Test2 />
      </article>
    </>
  );
}

function Test2() {
  return (
    <>
      <article>
        <h1>Test2</h1>
      </article>
    </>
  );
}

export default function App() {
  const [, setFlag1] = useState<boolean>(false);
  const [flag2, setFlag2] = useState<boolean>(false);

  return (
    <>
      <main>
        <h1>App</h1>
        <button
          onClick={() => {
            setFlag1((v) => !v);
          }}
        >
          setFlag1
        </button>
        <button
          onClick={() => {
            setFlag2((v) => !v);
          }}
        >
          setFlag2
        </button>
        <Test1 value={flag2} />
      </main>
    </>
  );
}
