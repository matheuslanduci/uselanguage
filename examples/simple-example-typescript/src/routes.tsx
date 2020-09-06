import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/Main";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
