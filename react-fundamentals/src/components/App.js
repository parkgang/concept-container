import { hot } from "react-hot-loader";
import React from "react";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return <Contact />;
  }
}
export default hot(module)(App);
