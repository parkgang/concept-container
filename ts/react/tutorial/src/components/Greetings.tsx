import React from 'react';

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
