import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import outline_heart from "./../assets/stroke_heart.svg";
import filled_heart from "./../assets/filled_heart.svg";
import styles from "./stories.module.css";
import layout from "./layout.module.css";

import store from "./../store";

class StoryDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { buttonHart: false };
	}
	clickedButton = story => {
		this.setState({ buttonHart: true });
		store.storiesStore.updateVotes(story);
	};
	render() {
		const { stories } = store.storiesStore;

		// const story = stories.getById(this.props.id);
		const story = stories.find(check => check.id === this.props.id);

		return (
			<>
				<div className={styles.navigation}>
					<Link to={ROUTES.stories} className={styles.back} />
					<Link to={ROUTES.addStory} className={layout.sub}>
						Schrijf je eigen verhaal
					</Link>
				</div>

				<div className={styles.container}>
					<ul className={styles.ul}>
						<article>
							<div className={styles.header}>
								<h2>{story.title}</h2>
								<span className={styles.votes}>
									<button
										onClick={() => this.clickedButton(story)}
										className={styles.heart}
									>
										{story.voted ? (
											<img
												src={filled_heart}
												alt="heart"
												width="20"
												height="20"
											/>
										) : (
											<img
												src={outline_heart}
												alt="heart"
												width="20"
												height="20"
											/>
										)}
									</button>
									{story.votes}
								</span>
							</div>

							<div className={styles.template}>
								<div className={styles.flex}>
									<p>Door {story.author}</p>{" "}
									<p className={styles.genre}>{story.genre}</p>
								</div>
								<p>{story.synopsys}</p>
								<p>{story.story}</p>
							</div>
						</article>
					</ul>
				</div>
			</>
		);
	}
}

export default inject(`storiesStore`)(observer(StoryDetail));
