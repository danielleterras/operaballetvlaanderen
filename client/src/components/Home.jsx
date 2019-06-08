import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import Cube from "./Cube";
import SmallCube from "./SmallCube";

import styles from "./home.module.css";
import layout from "./layout.module.css";

import mouse from "./../assets/scroll_icon.svg";
import cubes from "./../assets/Cubes.gif";

class FullpageWrapper extends Component {
  render() {
    return (
      <ReactFullpage
        navigation
        sectionsColor={["#000", "#000", "#000"]}
        render={() => {
          return (
            <>
              <div className="section">
                <h1 className={styles.maintitle}>Cubo</h1>
                <Cube />
                <div className={styles.scroll}>
                  <img src={mouse} alt="mouse" width="44" height="44" />
                  <p>Scroll naar beneden om te ontdekken</p>
                </div>
              </div>
              <div className="section">
                <h1 className={styles.title}>
                  <span className={styles.size}>Ontdek</span>{" "}
                  <span className={styles.bold}>Cubo</span>
                </h1>
                <div className={styles.cube}>
                  <SmallCube />
                </div>
                <p style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                  Ervaar op een unieke manier
                </p>
              </div>
              <div className="section">
                <div className={styles.flex}>
                  <div className={styles.cube2}>
                    <SmallCube />
                  </div>
                  <div className={styles.paragraph}>
                    <Link to={ROUTES.stories} className={layout.sub}>
                      Ontdek alle verhalen
                    </Link>
                    <h2 className={styles.secondtitle}>
                      Wil jij opera en ballet op een unieke manier te ervaren?
                    </h2>
                    <p>
                      Dankzij <span className={styles.bold}>Cubo</span> worden
                      niet alleen jouw ogen en oren geprikkeld maar word je
                      helemaal ondergedompelt in de wereld van Opera Ballet
                      Vlaanderen.
                    </p>
                    <p>
                      Cubo reageert op wat zich voor jouw ogen afspeelt tijdens
                      de voorstelling, door veranderingen in{" "}
                      <span className={styles.bold}>kleur</span> en{" "}
                      <span className={styles.bold}>trillingen</span>. Bij
                      aanvang van de voorstelling geeft hij een korte{" "}
                      introductie over de voorstelling die je gaat bijwonen.
                      Hierna neem je Cubo mee in de zaal en ervaar je de show
                      met een <span className={styles.bold}>extra zintuig</span>{" "}
                      in jouw handen. Na de show kan je feedback of jouw verhaal
                      meedelen aan Cubo.
                    </p>
                    <p>
                      Eén van deze verhalen zal worden omgezet tot een korte
                      ballet of opera voorstelling.{" "}
                      <span className={styles.bold}>Deel jouw verhaal</span> en
                      laat je horen, net zoals Opera Ballet Vlaanderen.
                    </p>
                    <div className={styles.navigation}>
                      <Link to={ROUTES.createStory} className={layout.button}>
                        Creëer je verhaal
                      </Link>
                      <Link to={ROUTES.addStory} className={layout.button}>
                        Schijf je verhaal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
