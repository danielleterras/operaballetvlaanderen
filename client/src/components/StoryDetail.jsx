import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import outline_heart from "./../assets/stroke_heart.svg";
import filled_heart from "./../assets/filled_heart.svg";
import styles from "./stories.module.css";
import layout from "./layout.module.css";

const StoryDetail = ({ storiesStore, id }) => {
	const { stories } = storiesStore;
	console.log(id);
	const story = stories.find(check => check.id === id);
	console.log(story);

	return (
		<>
			<div className={styles.navigation}>
				<Link to={ROUTES.landing} className={styles.back} />
				<Link to={ROUTES.addStory} className={layout.sub}>
					Schijf je eigen verhaal
				</Link>
			</div>
			<div className={styles.container}>
				<ul className={styles.ul}>
					<article>
						<div className={styles.header}>
							<h2>{story.title}</h2>
						</div>
						<div className={styles.template}>
							<p>Door {story.author}</p>
							<p>{story.synopsys}</p>
							<p>{story.story}</p>
						</div>
					</article>
				</ul>
			</div>
		</>
	);
};

export default inject(`storiesStore`)(observer(StoryDetail));
