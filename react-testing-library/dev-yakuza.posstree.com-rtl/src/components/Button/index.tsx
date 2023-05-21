import Styled from "styled-components";

interface ContainerProps {
  readonly backgroundColor?: string;
}

const Container = Styled.div<ContainerProps>`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly onClick?: () => void;
}

export const Button = ({ label, backgroundColor, onClick }: Props) => {
  return (
    <Container backgroundColor={backgroundColor} onClick={onClick}>
      {label}
    </Container>
  );
};
