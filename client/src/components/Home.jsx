import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import Cube from "./Cube";

import "./styles.css";
import styles from "./home.module.css";
import mouse from "./../assets/scroll_icon.svg";
import cube1 from "./../assets/cube_1.svg";
import cubes from "./../assets/Cubes.gif";
import cube3 from "./../assets/cube_3.svg";
import cube4 from "./../assets/cube_4.svg";
import cube5 from "./../assets/cube_5.svg";

import cube_small from "./../assets/cube_small.svg";

class FullpageWrapper extends Component {
  render() {
    return (
      <ReactFullpage
        navigation
        sectionsColor={[
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000"
        ]}
        render={() => {
          return (
            <div>
              <div className="section">
                <h1>Cubo</h1>
                <Cube />
                <div className={styles.scroll}>
                  <img src={mouse} alt="mouse" width="44" height="44" />
                  <p>Scroll naar beneden om te ontdekken</p>
                </div>
              </div>
              <div className="section">
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <span style={{ fontSize: "24px" }}>Ontdek</span>{" "}
                  <span style={{ fontWeight: "bold" }}>Cubo</span>
                </h1>
                <div
                  className={styles.cube1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "650px"
                  }}
                >
                  {/*<Cube />*/}
                  <img src={cubes} alt="cube1" width="300px" height="300px" />
                </div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  Ervaar op een unieke manier
                </p>
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
                    className={styles.cube2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "650px",
                      width: "650px"
                    }}
                  >
                    {/*<Cube />*/}
                    <img src={cubes} alt="cube2" width="350px" height="350px" />
                  </div>
                  <div className={styles.paragraph}>
                    <Link to={ROUTES.stories} className={styles.sub}>
                      Ontdek alle verhalen
                    </Link>
                    <h2>
                      Wil jij opera en ballet op een unieke manier te ervaren?
                    </h2>
                    <p>
                      Dankzij <span style={{ fontWeight: "bold" }}>Cubo</span>{" "}
                      worden niet alleen jouw ogen en oren geprikkeld maar word
                      je helemaal ondergedompelt in de wereld van Opera Ballet
                      Vlaanderen.
                    </p>
                    <p>
                      Cubo reageert op wat zich voor jouw ogen afspeelt tijdens
                      de voorstelling, door veranderingen in{" "}
                      <span style={{ fontWeight: "bold" }}>kleur</span> en{" "}
                      <span style={{ fontWeight: "bold" }}>trillingen</span>.
                      Bij aanvang van de voorstelling geeft hij een korte{" "}
                      introductie over de voorstelling die je gaat bijwonen.
                      Hierna neem je Cubo mee in de zaal en ervaar je de show
                      met een{" "}
                      <span style={{ fontWeight: "bold" }}>extra zintuig</span>{" "}
                      in jouw handen. Na de show kan je feedback of jouw verhaal
                      meedelen aan Cubo.
                    </p>
                    <p>
                      Eén van deze verhalen zal worden omgezet tot een korte
                      ballet of opera voorstelling.{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Deel jouw verhaal
                      </span>{" "}
                      en laat je horen, net zoals Opera Ballet Vlaanderen.
                    </p>
                    <div className={styles.navigation}>
                      <Link to={ROUTES.createStory} className={styles.button}>
                        Creëer je verhaal
                      </Link>
                      <Link to={ROUTES.addStory} className={styles.button}>
                        Schijf je verhaal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
