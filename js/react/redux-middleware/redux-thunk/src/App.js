import React from 'react';

import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';

import './App.css';

const components = { CounterContainer, PostListContainer };

function App() {
  return (
    <>
      <components.PostListContainer />
    </>
  );
}

export default App;
