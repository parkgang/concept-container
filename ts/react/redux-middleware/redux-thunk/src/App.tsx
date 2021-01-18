import React from 'react';

import * as components from './components';

import './App.css';

function App(): JSX.Element {
  return (
    <>
      <components.TodoInsert />
      <components.TodoList />
    </>
  );
}

export default App;
