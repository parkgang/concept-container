import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NoReactQuery from "./pages/NoReactQuery";
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
          <Route exact path="/">
            <Redirect to="/no-react-query" />
          </Route>
          <Route path="/no-react-query" component={NoReactQuery} />
          <Route path="/query1" component={Home1} />
          <Route path="/query2" component={Home2} />
          <Route path="/query3" component={Home3} />
          <Route path="/query4" component={Home4} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
