import { useEffect } from "react";

export default function APage() {
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
    </>
  );
}
