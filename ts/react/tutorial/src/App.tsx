import React from 'react';

import Greetings from './Greetings';

import './App.css';

function App(): JSX.Element {
  const onClick = (name: string) => {
    alert(`${name}님 안녕하세요!`);
  };
  return (
    <div>
      <span>Hello, world!</span>
      <Greetings name={'박경은'} onClick={onClick} />
    </div>
  );
}

export default App;
