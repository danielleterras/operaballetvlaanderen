import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import { ROUTES } from "./constants/";

import Navigation from "./components/index.js";
import Stories from "./components/Stories";
import About from "./containers/About";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={ROUTES.stories} component={Stories} />
        <Route path={ROUTES.about} component={About} />
        <Route
          path={ROUTES.landing}
          exact
          strict
          render={() => <>Welcome Home.</>}
        />
      </Switch>
    </>
  );
};

export default withRouter(App);
