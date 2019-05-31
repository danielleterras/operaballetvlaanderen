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
				sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
				render={() => {
					return (
						<div>
							<div className="section">
								Cube needs to go here
								<Cube />
							</div>
							<div className="section">
								<Stories />
							</div>
							<div className="section">
								<h3>Section 3</h3>
								<Performances />
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullpageWrapper;
