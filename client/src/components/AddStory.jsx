import React from "react";
import styles from "./addStory.module.css";
import { PropTypes, inject } from "mobx-react";

const AddStory = ({ storiesStore, history }) => {
  const redirect = () => {
    console.log(`State updated`);
    history.push(`/`);
  };

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
        <input type="text" name="synopsys" id="synopsys" ref={synopsisInput} />
      </label>
      <label htmlFor="story">
        Verhaal
        <textarea type="text" name="story" id="story" ref={storyInput} />
      </label>
      <input type="submit" value="add" />
    </form>
  );
};

AddStory.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`)(AddStory);
