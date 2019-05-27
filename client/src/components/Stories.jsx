import React from "react";
import { inject, observer, PropTypes } from "mobx-react";

const Stories = ({ store }) => {
  const { stories } = store;
  const typeInput = React.createRef();
  const genreInput = React.createRef();

  const authorInput = React.createRef();

  const titleInput = React.createRef();
  const synopsisInput = React.createRef();
  const storyInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    store.addStory({
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
    <>
      <h1>Stories</h1>
      <ul>
        {stories.map(story => (
          <article key={story.id}>
            <h2>{story.title}</h2>
            <span>{story.type}</span> - <span>{story.genre}</span> -{" "}
            <span>{story.author}</span>
            <p>{story.synopsys}</p>
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
    </>
  );
};

Stories.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject("store")(observer(Stories));
