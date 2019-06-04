import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import outline_heart from "./../assets/stroke_heart.svg";
import styles from "./stories.module.css";

const Stories = ({ storiesStore }) => {
  const { stories, vote } = storiesStore;

  const typeInput = React.createRef();
  const genreInput = React.createRef();

  const authorInput = React.createRef();

  const titleInput = React.createRef();
  const synopsisInput = React.createRef();
  const storyInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storiesStore.addStory({
      type: typeInput.current.value,
      genre: genreInput.current.value,

      author: authorInput.current.value,

      title: titleInput.current.value,
      synopsis: synopsisInput.current.value,
      story: storyInput.current.value
    });

    typeInput.current.value = "";
    genreInput.current.value = "";

    authorInput.current.value = "";

    titleInput.current.value = "";
    synopsisInput.current.value = "";
    storyInput.current.value = "";
  };
  return (
    <div>
      <ul className={styles.container}>
        {stories.map(story => (
          <article key={story.id}>
            <div className={styles.header}>
              <h2>{story.title}</h2>
              <span className={styles.votes}>
                <button onClick={() => vote(story)} className={styles.heart}>
                  <img src={outline_heart} alt="heart" width="20" height="20" />
                </button>{" "}
                {story.votes}
              </span>
            </div>
            <div className={styles.template}>
              <p>Door {story.author}</p>
              <p>{story.synopsys}</p>
            </div>
            {/*onClick={e => story.setVotes(e.target.value)}*/}
          </article>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          Type
          <input type="text" name="type" id="type" ref={typeInput} />
        </label>
        <label htmlFor="genre">
          Genre
          <select id="genre" name="genre" ref={genreInput}>
            <option>-- Select a category --</option>
            <option value="Opera">Opera</option>
            <option value="Ballet">Ballet</option>
            <option value="Experimenteel">Experimenteel</option>
          </select>{" "}
        </label>
        <label htmlFor="author">
          Auteur
          <input type="text" name="author" id="author" ref={authorInput} />
        </label>
        <label htmlFor="title">
          Titel
          <input type="text" name="title" id="title" ref={titleInput} />
        </label>
        <label htmlFor="synopsys">
          Synopsis
          <input
            type="text"
            name="synopsys"
            id="synopsys"
            ref={synopsisInput}
          />
        </label>
        <label htmlFor="story">
          Verhaal
          <textarea type="text" name="story" id="story" ref={storyInput} />
        </label>
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

Stories.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject("storiesStore")(observer(Stories));
