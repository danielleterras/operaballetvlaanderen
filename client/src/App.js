import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
// import ReactFullpage from "@fullpage/react-fullpage";

import { ROUTES } from "./constants/";

import Navigation from "./components/index.js";
import Stories from "./components/Stories";
import Performances from "./components/Performances";
import Home from "./components/Home";

import About from "./containers/About";

const App = () => {
	return (
		<>
			{/* <Navigation /> */}
			<Switch>
				<Route path={ROUTES.stories} component={Stories} />
				<Route path={ROUTES.performances} component={Performances} />
				<Route path={ROUTES.about} component={About} />
				<Route path={ROUTES.landing} exact strict component={Home} />
			</Switch>
		</>
	);
};

export default withRouter(App);
