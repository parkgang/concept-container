import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Cashes from "./pages/Cashes";
import Sidebar from "./components/Sidebar";

export const sessionAuthKey = "isAuthorized";

export default function App() {
  const isAuthorized = !!sessionStorage.getItem(sessionAuthKey);

  return (
    <>
      <BrowserRouter>
        {isAuthorized && <Sidebar />}
        <Switch>
          {!isAuthorized && <Login />}
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/cashes" component={Cashes} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
