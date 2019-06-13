import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { PropTypes, inject } from "mobx-react";

import SmallCube from "./SmallCube";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import mouse from "./../assets/scroll_icon.svg";

import styles from "./createStory.module.css";

const CreateStory = ({ storiesStore, storiesTemplateStore, history }) => {
  const redirect = id => {
    history.push(`/story/${id}`);
  };

  let genreButtonInput = "";

  storiesTemplateStore.templates.map(test => console.log(test));

  const authorInput = React.createRef();
  const titleInput = React.createRef();
  const synopsysInput = React.createRef();
  const personageInput = React.createRef();

  const handleChangeGenre = e => {
    genreButtonInput = e.currentTarget.value;
    return genreButtonInput;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const generatedStory = storiesTemplateStore.templates.find(
      check => check.genre === genreButtonInput
    );

    const regex = /\[naam\]/g;
    const expr = /\[personage\]/g;

    console.log(generatedStory.story);
    storiesStore
      .addStory({
        title: titleInput.current.value,
        genre: genreButtonInput,
        synopsys: synopsysInput.current.value,
        author: authorInput.current.value,
        personage: personageInput.current.value,
        story: generatedStory.story
          .replace(regex, authorInput.current.value)
          .replace(expr, personageInput.current.value)
      })
      .then(story => {
        redirect(story.id);
      });
    titleInput.current.value = "";
    genreButtonInput = "";
    synopsysInput.current.value = "";
    authorInput.current.value = "";
    personageInput.current.value = "";
  };

  return (
    <ReactFullpage
      navigation
      sectionsColor={["#000", "#000", "#000", "#000", "#000"]}
      render={() => {
        return (
          <form onSubmit={handleSubmit}>
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
                  <p>Kies een personage dat jou aanspreekt.</p>
                  <h2>Wie zou je willen zijn?*</h2>
                  <input
                    type="text"
                    placeholder="Typ hier je personage"
                    className={styles.inputField}
                    ref={personageInput}
                    required
                  />
                  <p>*Koningin, weduwe, prins, detective, wetenschapper,...</p>
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
                  <h2>Welke stijl verkies je?</h2>
                  <div className={styles.genreButtons}>
                    <label>
                      <input
                        type="radio"
                        value="Romantiek"
                        onChange={handleChangeGenre}
                      />
                      <span>Romantiek</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Fantasie"
                        onChange={handleChangeGenre}
                      />
                      <span>Fantasie</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Misdaad"
                        onChange={handleChangeGenre}
                      />
                      <span>Misdaad</span>
                    </label>
                  </div>
                  <div className={styles.genreButtons}>
                    <label>
                      <input
                        type="radio"
                        value="Mysterie"
                        onChange={handleChangeGenre}
                      />
                      <span>Mysterie</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Sci-fi"
                        onChange={handleChangeGenre}
                      />
                      <span>Science-fiction</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Horror"
                        onChange={handleChangeGenre}
                      />
                      <span>Horror</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className={styles.flex}>
                <div className={styles.cube6}>
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
                <div className={styles.cube7}>
                  <SmallCube />
                </div>
                <div className={styles.paragraphText}>
                  <p>
                    Om het verhaal een persoonlijke twist te geven, kan je hier
                    iets schrijven dat jou is overkomen in het thema dat je hebt
                    gekozen (stap 06).
                  </p>
                  <h2>Vertel een leuke anekdote over jezelf.</h2>
                  <textarea
                    type="text"
                    name="synopsys"
                    id="synopsys"
                    placeholder="Typ hier je anekdote"
                    className={styles.textField}
                    ref={synopsysInput}
                    required
                  />
                  <input
                    type="submit"
                    className={styles.button}
                    value="Creëer mijn verhaal"
                  />
                </div>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

CreateStory.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`, `storiesTemplateStore`)(CreateStory);
