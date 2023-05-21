import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import Nav from "components/Nav";
import APage from "pages/APage";
import BPage from "pages/BPage";
import CPage from "pages/CPage";
import UseQueryExamplePage from "pages/UseQueryExamplePage";
import NotFoundPage from "pages/NotFoundPage";

export const APagePath = "/a";
export const BPagePath = "/b";
export const CPagePath = "/c";
export const UseQueryExamplePagePath = "/use-query-example";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path={APagePath} component={APage} />
          <Route path={BPagePath} component={BPage} />
          <Route path={CPagePath} component={CPage} />
          <Route
            path={UseQueryExamplePagePath}
            component={UseQueryExamplePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
