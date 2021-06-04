const getNumber = (number: number) => {
  console.log("숫자가 변동되었습니다.");
  return number;
};

const getText = (text: string) => {
  console.log("글자가 변동되었습니다.");
  return text;
};

type Props = {
  number: number;
  text: string;
};

function ShowState({ number, text }: Props) {
  const showNumber = getNumber(number);
  const showText = getText(text);

  return (
    <div className="info-wrapper">
      {showNumber} <br />
      {showText}
    </div>
  );
}

export default ShowState;
