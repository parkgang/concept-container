import { useEffect } from "react";

export default function BPage() {
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
    </>
  );
}
