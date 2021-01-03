import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import myLogger from "./middlewares/myLogger";

import App from "./App";

const store = createStore(rootReducer, applyMiddleware(myLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
