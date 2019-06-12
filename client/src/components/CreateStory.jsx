import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { PropTypes, inject } from "mobx-react";

import SmallCube from "./SmallCube";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import mouse from "./../assets/scroll_icon.svg";

import styles from "./createStory.module.css";
import layout from "./layout.module.css";

const CreateStory = ({ storiesStore, storiesTemplateStore }) => {
  const genreInput = React.createRef();

  const authorInput = React.createRef();

  const titleInput = React.createRef();
  const synopsysInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storiesStore.addStory({
      title: titleInput.current.value,
      genre: genreInput.current.value,
      synopsys: synopsysInput.current.value,
      author: authorInput.current.value
    });
    titleInput.current.value = "";
    genreInput.current.value = "";
    synopsysInput.current.value = "";
    authorInput.current.value = "";
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
                  />
                  <p>*Koningin, weduwe, prins detective, wetenschapper,...</p>
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
                  <select
                    id="genre"
                    name="genre"
                    className={styles.inputField}
                    ref={genreInput}
                  >
                    <option>-- Select a category --</option>
                    <option value="Romantiek">Romantiek</option>
                    <option value="Fantasie">Fantasie</option>
                    <option value="Misdaad">Misdaad</option>
                    <option value="Mysterie">Mysterie</option>
                    <option value="Science fiction">Science fiction</option>
                  </select>
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
                  />
                  <Link to={ROUTES.story} className={layout.sub}>
                    <input
                      type="submit"
                      className={styles.button}
                      value="Creëer mijn verhaal"
                    />
                  </Link>
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
  storiesStore: PropTypes.observableObject.isRequired,
  storiesTemplateStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`, `storiesTemplateStore`)(CreateStory);
