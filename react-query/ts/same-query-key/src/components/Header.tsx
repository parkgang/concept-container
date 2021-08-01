import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  function handleHome1() {
    history.push(`home1`);
  }
  function handleHome2() {
    history.push(`home2`);
  }
  function handleHome3() {
    history.push(`home3`);
  }
  function handleHome4() {
    history.push(`home4`);
  }

  return (
    <>
      <button onClick={handleHome1}>Home1</button>
      <button onClick={handleHome2}>Home2</button>
      <button onClick={handleHome3}>Home3</button>
      <button onClick={handleHome4}>Home4</button>
    </>
  );
}
