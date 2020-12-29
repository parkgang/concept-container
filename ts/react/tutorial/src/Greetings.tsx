import React from 'react';

interface GreetingProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

// 함수 선언식
function Greetings({ name, mark, optional, onClick }: GreetingProps): JSX.Element {
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
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;

// React.FC 사용 (기본값 제대로 할당되지 않는 이슈 존재)
// const Greetings: React.FC<GreetingProps> = ({ name = '', mark = '하' }): JSX.Element => {
//   return (
//     <div>
//       Hello,
//       {name}
//       {mark}
//     </div>
//   );
// };

// React.FC 함수 표현식으로 사용
// const Greetings = ({ name, mark }: GreetingProps): JSX.Element => (
//   <div>
//     Hello, {name} {mark}
//   </div>
// );
