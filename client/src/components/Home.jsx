/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import Stories from "./Stories";
import Cube from "./Cube";
import Performances from "./Performances";

import "./styles.css";

class FullpageWrapper extends Component {
	render() {
		return (
			<ReactFullpage
				navigation
				sectionsColor={[
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107",
					"#120107"
				]}
				render={() => {
					return (
						<div>
							<div className="section">
								<Cube />
							</div>
							<div className="section">
								<h1>Meet the cube</h1>
								<Cube />
								<p>Experience in a new way</p>
								<button>Read all stories</button>
							</div>
							<div className="section">
								<h1>introduction</h1>
							</div>
							<div className="section">
								<h1>Title?</h1>
							</div>
							<div className="section">
								<h1>Name?</h1>
							</div>
							<div className="section">
								<h1>Wie wil je zijn?</h1>
							</div>
							<div className="section">
								<h1>Welke stijl?</h1>
							</div>
							<div className="section">
								<h1>Vertel anekdote</h1>
							</div>
							<div className="section">
								<h1>here's your story</h1>
							</div>
							<div className="section">
								<Stories />
							</div>
							<div className="section">
								<h3>What is your story?</h3>
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullpageWrapper;
