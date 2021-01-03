import React from 'react';

// <components.Greetings name={'박경은'} onClick={() => console.log('test')} />

interface GreetingProps {
  name: string;
  mark?: string;
  optional?: string;
  onClick: (name: string) => void;
}

const Greetings: React.FC<GreetingProps> = ({ name, mark, optional, onClick }) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      <div>
        <span>
          Hello, {name} {mark}
        </span>
      </div>
      <div>
        <span>{optional && <p>{optional}</p>}</span>
      </div>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Greetings;

/*
// React.FC를 사용하지 않고 함수 선언식으로 바로 빼는 template
export default function Greetings({ name, mark, optional, onClick }: GreetingProps): JSX.Element {
}
*/
