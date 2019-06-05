import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./addStory.module.css";
import { PropTypes, inject } from "mobx-react";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import cube1 from "./../assets/cube_1.svg";
import cube2 from "./../assets/Cube_1.gif";
import cube3 from "./../assets/cube_3.svg";
import cube4 from "./../assets/cube_4.svg";
import cube5 from "./../assets/cube_5.svg";

import cube_small from "./../assets/cube_small.svg";

const AddStory = ({ storiesStore, history }) => {
  const redirect = () => {
    console.log(`State updated`);
    history.push(`/`);
  };

  const genreInput = React.createRef();
  const authorInput = React.createRef();
  const titleInput = React.createRef();
  const synopsisInput = React.createRef();
  const storyInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storiesStore.addStory({
      title: titleInput.current.value,
      genre: genreInput.current.value,
      author: authorInput.current.value,
      synopsis: synopsisInput.current.value,
      story: storyInput.current.value
    });

    titleInput.current.value = "";
    genreInput.current.value = "";
    authorInput.current.value = "";
    synopsisInput.current.value = "";
    storyInput.current.value = "";
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  className={styles.cube3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "650px"
                  }}
                >
                  {/*<Cube />*/}
                  <img src={cube3} alt="cube3" width="650px" height="350px" />
                </div>
                <div style={{ width: "600px", marginLeft: "-10rem" }}>
                  <p>We willen graag weten wie de auteur is van dit verhaal.</p>
                  <h2>Wat is jouw naam?</h2>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                    ref={authorInput}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  className={styles.cube6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "650px"
                  }}
                >
                  {/*<Cube />*/}
                  <img src={cube1} alt="cube2" width="650px" height="350px" />
                </div>
                <div style={{ width: "600px", marginLeft: "-10rem" }}>
                  <p>Omschrijf je verhaal in één zin.</p>
                  <h2>Wat is de titel van je verhaal?</h2>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                    ref={titleInput}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div
                  className={styles.cube5}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "650px"
                  }}
                >
                  {/*<Cube />*/}
                  <img src={cube5} alt="cube5" width="650px" height="350px" />
                </div>
                <div style={{ width: "600px", marginLeft: "-10rem" }}>
                  <p>Omschrijf je thema.</p>
                  <h2>Welke stijl schrijf je?</h2>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  {/*<Cube />*/}
                  <img
                    src={cube_small}
                    alt="cube2"
                    width="650px"
                    height="350px"
                  />
                </div>
                <div>
                  <p>Vat hieronder kort je verhaal samen.</p>
                  <h2>Schrijf hier de synopsis.</h2>

                  <textarea
                    type="text"
                    name="synopsys"
                    id="synopsys"
                    placeholder="Typ hier je antwoord"
                    className={styles.textField}
                    ref={synopsisInput}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <div>
                  {/*<Cube />*/}
                  <img
                    src={cube_small}
                    alt="cube2"
                    width="650px"
                    height="350px"
                  />
                </div>
                <div>
                  <h2>Schrijf hier je verhaal.</h2>
                  <textarea
                    type="text"
                    name="story"
                    id="story"
                    placeholder="Typ hier je antwoord"
                    className={styles.textField}
                    ref={storyInput}
                  />

                  <input
                    type="submit"
                    className={styles.button}
                    value="Deel mijn verhaal"
                  />
                  <Link to={ROUTES.stories} className={styles.sub}>
                    Ontdek alle verhalen
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

AddStory.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`)(AddStory);