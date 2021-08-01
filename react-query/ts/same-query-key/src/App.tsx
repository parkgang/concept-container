import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";

import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home1" component={Home1} />
          <Route path="/home2" component={Home2} />
          <Route path="/home3" component={Home3} />
          <Route path="/home4" component={Home4} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
