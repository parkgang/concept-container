import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "components/Nav";
import APage from "pages/APage";
import BPage from "pages/BPage";
import CPage from "pages/CPage";
import NotFoundPage from "pages/NotFoundPage";

export const APagePath = "/a";
export const BPagePath = "/b";
export const CPagePath = "/c";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path={APagePath} component={APage} />
          <Route path={BPagePath} component={BPage} />
          <Route path={CPagePath} component={CPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}
