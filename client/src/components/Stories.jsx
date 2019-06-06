import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import outline_heart from "./../assets/stroke_heart.svg";
import filled_heart from "./../assets/filled_heart.svg";
import styles from "./stories.module.css";
import layout from "./layout.module.css";

const Stories = ({ storiesStore }) => {
  const { stories, updateVotes } = storiesStore;

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
          {stories.map(story => (
            <article key={story.id}>
              <div className={styles.header}>
                <h2>{story.title}</h2>
                <span className={styles.votes}>
                  {story.liked ? (
                    <button
                      onClick={() => updateVotes(story)}
                      className={styles.heart}
                    >
                      <img
                        src={filled_heart}
                        alt="heart"
                        width="20"
                        height="20"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => updateVotes(story)}
                      className={styles.heart}
                      // disabled={storiesStore.liked}
                    >
                      <img
                        src={outline_heart}
                        alt="heart"
                        width="20"
                        height="20"
                      />
                    </button>
                  )}

                  {story.votes}
                </span>
              </div>
              <div className={styles.template}>
                <p>Door {story.author}</p>
                <p>{story.synopsys}</p>
                <Link to={`storyDetail/${story._id}`} className={layout.sub}>
                  Lees meer...
                </Link>
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
