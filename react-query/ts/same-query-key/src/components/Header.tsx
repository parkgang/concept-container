import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  function handleNoReactQuery() {
    history.push(`no-react-query`);
  }
  function handleQuery1() {
    history.push(`query1`);
  }
  function handleQuery2() {
    history.push(`query2`);
  }
  function handleQuery3() {
    history.push(`query3`);
  }
  function handleQuery4() {
    history.push(`query4`);
  }

  return (
    <>
      <div style={{ padding: "1rem", border: "1px solid" }}>
        <button onClick={handleNoReactQuery}>no-react-query</button>
        <button onClick={handleQuery1}>query1</button>
        <button onClick={handleQuery2}>query2</button>
        <button onClick={handleQuery3}>query3</button>
        <button onClick={handleQuery4}>query4</button>
      </div>
    </>
  );
}
