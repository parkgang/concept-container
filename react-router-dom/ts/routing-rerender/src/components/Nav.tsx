import { useHistory } from "react-router-dom";

import { APagePath, BPagePath, CPagePath } from "App";

export default function Nav() {
  const history = useHistory();

  function handleHistory(path: string) {
    return () => history.push(path);
  }

  return (
    <>
      <h1>Nav</h1>
      <button onClick={handleHistory(APagePath)}>APage</button>
      <button onClick={handleHistory(BPagePath)}>BPage</button>
      <button onClick={handleHistory(CPagePath)}>CPage</button>
    </>
  );
}
