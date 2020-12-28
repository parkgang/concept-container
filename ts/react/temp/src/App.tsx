import React from 'react';

type GreetingsProps = {
  name: string;
};

const App: React.FC<GreetingsProps> = ({ name = '' }) => (
  <div>
    Hello,
    {name}
  </div>
);

export default App;
