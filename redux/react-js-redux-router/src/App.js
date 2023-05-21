import React, { Component, Fragment } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import { logger } from './middlewares';

import { DownContainer, UpContainer } from './containers';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, applyMiddleware(logger));

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              {/* host(ex: http://127.0.0.1:5500)를 제외한 해당 파일을 불러오는 경로를 작성해야 build된 파일이 react-router에 의해 렌더링 됩니다. (ex: /js/react/react-redux-router/dist) */}
              <Route exact path="/" component={DownContainer} />
              <Route exact path="/test" component={UpContainer} />
              <Route /> {/* 404 error rendering */}
            </Switch>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}
