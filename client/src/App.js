import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import { ROUTES } from "./constants/";

import Home from "./components/Home";
import Stories from "./components/Stories";
import AddStory from "./components/AddStory";
import CreateStory from "./components/CreateStory";
import StoryDetail from "./components/StoryDetail";
import Story from "./components/Story";

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route path={ROUTES.stories} component={Stories} />
					<Route path={ROUTES.addStory} component={AddStory} />
					<Route path={ROUTES.createStory} component={CreateStory} />
					<Route
						path={ROUTES.storyDetail}
						render={({ match }) => <StoryDetail id={match.params.id} />}
					/>
					<Route path={ROUTES.story} component={Story} />
					<Route path={ROUTES.landing} exact strict component={Home} />
				</Switch>
			</>
		);
	}
}

export default withRouter(App);
