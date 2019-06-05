import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
// import ReactFullpage from "@fullpage/react-fullpage";

import { ROUTES } from "./constants/";

import Home from "./components/Home";
import Stories from "./components/Stories";
import AddStory from "./components/AddStory";
import CreateStory from "./components/CreateStory";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.stories} component={Stories} />
        <Route path={ROUTES.addStory} component={AddStory} />
        <Route path={ROUTES.createStory} component={CreateStory} />
        <Route path={ROUTES.landing} exact strict component={Home} />
      </Switch>
    </>
  );
};

export default withRouter(App);
