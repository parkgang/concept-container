import { useEffect } from "react";

export default function CPage() {
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
    </>
  );
}
