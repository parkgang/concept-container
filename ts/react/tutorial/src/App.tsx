import React from 'react';

import * as components from './components';

import './App.css';

function App(): JSX.Element {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <components.MyForm onSubmit={onSubmit} />
    </>
  );
}

export default App;
