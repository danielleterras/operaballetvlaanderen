import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { PropTypes, inject } from "mobx-react";

import Cube from "./Cube";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import styles from "./home.module.css";
import cube1 from "./../assets/cube_1.svg";
import cube2 from "./../assets/Cube_1.gif";
import cube3 from "./../assets/cube_3.svg";
import cube4 from "./../assets/cube_4.svg";
import cube5 from "./../assets/cube_5.svg";

import cube_small from "./../assets/cube_small.svg";

class CreateStory extends Component {
  render() {
    return (
      <ReactFullpage
        navigation
        sectionsColor={["#000", "#000", "#000", "#000", "#000", "#000"]}
        render={() => {
          return (
            <div>
              <div className="section">
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
                    <p>
                      We willen graag weten wie de auteur is van dit verhaal.
                    </p>
                    <h2>Wat is jouw naam?</h2>
                    <input
                      type="text"
                      placeholder="Typ hier je antwoord"
                      className={styles.inputField}
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
                    className={styles.cube4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "650px"
                    }}
                  >
                    {/*<Cube />*/}
                    <img src={cube4} alt="cube4" width="650px" height="350px" />
                  </div>
                  <div style={{ width: "600px", marginLeft: "-10rem" }}>
                    <p>Kies een personage dat jou aanspreekt.</p>
                    <h2>Wie zou je willen zijn?*</h2>
                    <input
                      type="text"
                      placeholder="Typ hier je antwoord"
                      className={styles.inputField}
                    />
                    <p>*Koningin, weduwe, prins detective, wetenschapper,...</p>
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
                    <h2>Welke stijl verkies je?</h2>
                    <input
                      type="text"
                      placeholder="Typ hier je antwoord"
                      className={styles.inputField}
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
                      placeholder="Typ hier je antwoord"
                      className={styles.inputField}
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
                    <p>
                      Om het verhaal een persoonlijke twist te geven, kan je
                      hier iets schrijven dat jou is overkomen in het thema dat
                      je hebt gekozen (stap 06).
                    </p>
                    <h2>Vertel een leuke anekdote over jezelf.</h2>
                    <textarea
                      placeholder="Typ hier je antwoord"
                      className={styles.textField}
                    />
                  </div>
                </div>
              </div>
              <div className="section">
                {/* <Cube /> */}
                <div>
                  <h3>Genoeg vragen.</h3>
                  <h2>Dit is jouw verhaal</h2>
                  <p>Titel</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos sequi nam esse fuga cumque, aliquam odit
                    voluptatem, eaque rem vitae magni sit sunt ullam praesentium
                    quasi, vel tenetur doloribus facere?
                  </p>
                  <p>
                    En dat is hoe het verhaal van <b>[naam]</b> begint…
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ducimus officia eveniet, maxime architecto iure doloribus
                    sequi optio omnis, dicta autem dignissimos quaerat
                    distinctio nostrum ratione itaque rerum. Consequatur,
                    dolore.
                  </p>
                  <button className={styles.button}>Deel je verhaal</button>
                  <Link to={ROUTES.stories} className={styles.sub}>
                    Ontdek alle verhalen
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

CreateStory.propTypes = {
  storiesStore: PropTypes.observableObject.isRequired
};

export default inject(`storiesStore`)(CreateStory);
