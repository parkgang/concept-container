import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';
// "applyMiddleware"에 여러개의 미들웨어를 적용 할 수 있습니다.
import myLogger from './middlewares/myLogger';

import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
