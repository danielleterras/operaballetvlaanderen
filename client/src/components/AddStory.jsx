import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { PropTypes, inject, observer } from "mobx-react";

import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import SmallCube from "./SmallCube";
import mouse from "./../assets/scroll_icon.svg";

import styles from "./addStory.module.css";
import layout from "./layout.module.css";

const AddStory = ({ storiesStore, history }) => {
  const redirect = id => {
    history.push(`/story/${id}`);
  };

  const genreInput = React.createRef();
  const authorInput = React.createRef();
  const titleInput = React.createRef();
  const storyInput = React.createRef();
  const synopsysInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storiesStore
      .addStory({
        title: titleInput.current.value,
        genre: genreInput.current.value,
        author: authorInput.current.value,
        story: storyInput.current.value,
        synopsys: synopsysInput.current.value
      })
      .then(story => {
        redirect(story.id);
      });

    console.log(redirect);

    titleInput.current.value = "";
    genreInput.current.value = "";
    authorInput.current.value = "";
    storyInput.current.value = "";
    synopsysInput.current.value = "";
  };

  return (
    <ReactFullpage
      navigation
      sectionsColor={["#000", "#000", "#000", "#000", "#000", "#000"]}
      render={() => {
        return (
          <form onSubmit={handleSubmit} className={styles.container}>
            <div className="section">
              <Link to={ROUTES.landing} className={styles.back} />
              <div className={styles.flex}>
                <div className={styles.cube3}>
                  <SmallCube />
                </div>
                <div className={styles.paragraph}>
                  <p>We willen graag weten wie de auteur is van dit verhaal.</p>
                  <h2>Wat is jouw naam?</h2>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Typ hier je naam"
                    className={styles.inputField}
                    ref={authorInput}
                    required
                  />
                </div>
              </div>
              <div className={styles.scroll}>
                <img src={mouse} alt="mouse" width="44" height="44" />
                <p>Scroll naar beneden om te ontdekken</p>
              </div>
            </div>
            <div className="section">
              <div className={styles.flex}>
                <div className={styles.cube4}>
                  <SmallCube />
                </div>
                <div className={styles.paragraph}>
                  <p>Omschrijf je verhaal in één zin.</p>
                  <h2>Wat is de titel van je verhaal?</h2>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Typ hier je titel"
                    className={styles.inputField}
                    ref={titleInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div className={styles.flex}>
                <div className={styles.cube5}>
                  <SmallCube />
                </div>
                <div className={styles.paragraph}>
                  <p>Omschrijf je thema.</p>
                  <h2>Welke stijl schrijf je?</h2>
                  <select
                    id="genre"
                    name="genre"
                    className={styles.inputField}
                    ref={genreInput}
                    required
                  >
                    <option>-- Select a category --</option>
                    <option value="Romantiek">Romantiek</option>
                    <option value="Fantasie">Fantasie</option>
                    <option value="Misdaad">Misdaad</option>
                    <option value="Mysterie">Mysterie</option>
                    <option value="Sci-fi">Science fiction</option>
                    <option value="Horror">Science fiction</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="section">
              <div className={styles.flex}>
                <div className={styles.cube6}>
                  <SmallCube />
                </div>
                <div className={styles.paragraphText}>
                  <h2>Schrijf hier je verhaal.</h2>
                  <textarea
                    type="text"
                    name="synopsys"
                    id="synopsys"
                    placeholder="Typ hier je verhaal"
                    className={styles.textField}
                    ref={storyInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div className={styles.flex}>
                <div className={styles.cube7}>
                  <SmallCube />
                </div>
                <div className={styles.paragraphText}>
                  <p>Vat hieronder kort je verhaal samen.</p>
                  <h2>Schrijf hier de synopsis.</h2>
                  <textarea
                    type="text"
                    name="story"
                    id="story"
                    placeholder="Typ hier je synopsis"
                    className={styles.textField}
                    ref={synopsysInput}
                    required
                  />
                  <div className={styles.navigation}>
                    <input
                      type="submit"
                      className={layout.button}
                      value="Deel mijn verhaal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

AddStory.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`)(withRouter(observer(AddStory)));
