import { useState } from "react";
import Styled from "styled-components";

import { Button } from "components/Button";

const Container = Styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
`;

const Label = Styled.div`
  margin: 10px;
  width: 40px;
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Button
        label="-"
        backgroundColor="#FF1744"
        onClick={() => setCount(count - 1)}
      />
      <Label>{count}</Label>
      <Button
        label="+"
        backgroundColor="#304FFE"
        onClick={() => setCount(count + 1)}
      />
    </Container>
  );
}

export default App;
