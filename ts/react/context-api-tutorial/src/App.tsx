import React from 'react';

import * as components from './components';

import './App.css';

function App(): JSX.Element {
  return (
    <>
      <components.TodoForm />
      <components.TodoList />
    </>
  );
}

export default App;
