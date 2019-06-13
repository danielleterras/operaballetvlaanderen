import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import outline_heart from "./../assets/stroke_heart.svg";
import filled_heart from "./../assets/filled_heart.svg";

import styles from "./stories.module.css";
import layout from "./layout.module.css";

const Stories = ({ storiesStore, storiesTemplateStore }) => {
	const { stories, updateVotes } = storiesStore;

	return (
		<>
			<div className={styles.navigation}>
				<Link to={ROUTES.landing} className={styles.back} />
				<Link to={ROUTES.addStory} className={layout.sub}>
					Schrijf je eigen verhaal
				</Link>
			</div>
			<div className={styles.container}>
				<article className={styles.intro}>
					<h2 className={styles.italic}>Deel jouw verhaal</h2>
					<p className={styles.italic}>
						Opera Ballet Vlaanderen is op zoek naar jou stem. Jou verhaal is
						belangrijk voor hen. Hier vind u alle verhalen terug waarop kan
						gestemd worden door op het "hartje" te klikken. De eerstvolgende
						deadline is 31 december 2019. Daarna wordt het verhaal met de meeste
						stemmen binnen één bepaald genre dat door Opera Ballet Vlaanderen
						wordt beslist uitgewerkt. Op deze manier kunt u Opera Ballet
						Vlaanderen opnieuw op een unieke manier beleven.
					</p>
				</article>
				<ul className={styles.ul}>
					{stories.map(story => (
						<article key={story.id} className={styles.article}>
							<div className={styles.header}>
								<h2>{story.title}</h2>
								<span className={styles.votes}>
									<button
										onClick={() => updateVotes(story)}
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
								<p>Door {story.author}</p>
								<p>{story.synopsys}</p>
								<div className={styles.link}>
									<Link to={`story/${story.id}`} className={styles.sublees}>
										Lees meer...
									</Link>
									<span className={styles.genre}>{story.genre}</span>{" "}
								</div>
							</div>
						</article>
					))}
				</ul>
			</div>
		</>
	);
};

Stories.propTypes = {
	storiesStore: PropTypes.observableObject.isRequired
};

export default inject("storiesStore")(observer(Stories));
