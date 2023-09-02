import React from 'react';

import * as components from './components';
import { TodosContextProvider } from './contexts/TodosContext';

import './App.css';

function App(): JSX.Element {
  return (
    <TodosContextProvider>
      <components.TodoForm />
      <components.TodoList />
    </TodosContextProvider>
  );
}

export default App;
