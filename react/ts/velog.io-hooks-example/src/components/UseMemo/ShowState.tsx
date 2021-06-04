import { useMemo } from "react";

function getNumber(number: number) {
  console.log("숫자가 변동되었습니다.");
  return number;
}

function getText(text: string) {
  console.log("글자가 변동되었습니다.");
  return text;
}

type Props = {
  number: number;
  text: string;
};

function ShowState({ number, text }: Props) {
  // useMemo 미사용
  // const showNumber = getNumber(number);
  // const showText = getText(text);

  // useMemo 사용
  const showNumber = useMemo(() => getNumber(number), [number]);
  const showText = useMemo(() => getText(text), [text]);

  return (
    <>
      <div>{showNumber}</div>
      <div>{showText}</div>
    </>
  );
}

export default ShowState;
