import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import Cube from "./Cube";
import SmallCube from "./SmallCube";

import styles from "./home.module.css";
import layout from "./layout.module.css";
import button from "./../assets/button.gif";

import mouse from "./../assets/scroll_icon.svg";

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
                <h1 className={styles.title}>Cubo</h1>
                <p className={styles.slogan}>Ervaar op een unieke manier</p>
                <div className={styles.cube}>
                  <Cube />
                </div>

                <div className={styles.scroll}>
                  <img src={mouse} alt="mouse" width="44" height="44" />
                  <p>Scroll naar beneden om te ontdekken</p>
                </div>
              </div>
              <div className="section">
                <div className={styles.flex}>
                  <div className={styles.cube2}>
                    <a
                      href="https://operaballet.be/en"
                      className={styles.click}
                    >
                      <img
                        src={button}
                        height="60"
                        width="90"
                        alt="Click me"
                        className={styles.img}
                      />
                      <SmallCube />
                    </a>
                  </div>
                  <div className={styles.paragraph}>
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
                      in jouw handen.
                    </p>
                    <p>
                      Eén van deze verhalen zal worden omgezet tot een korte
                      ballet of opera voorstelling.{" "}
                      <span className={styles.bold}>Deel jouw verhaal</span> en
                      laat je horen, net zoals Opera Ballet Vlaanderen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className={styles.flex}>
                  <div className={styles.cube2}>
                    <SmallCube />
                  </div>
                  <div className={styles.paragraph}>
                    <h2 className={styles.secondtitle}>Deel jouw verhaal</h2>
                    <p>
                      Omdat wij, Opera Ballet Vlaanderen, onze verhalen naar
                      buiten brengen willen wij graag ook jouw verhalen te weten
                      komen.
                    </p>
                    <p>
                      Na de voorstelling kan je feedback meedelen aan Cubo door
                      het tegen hem te vertellen, of je kan ook een eigen
                      verhaal meedelen.
                    </p>
                    <p>
                      Hier op deze website is het ook mogelijk om een verhaal te
                      schrijven. Wij voorzien twee opties om een verhaal te
                      schrijven: Schrijf je verhaal: schrijf zelf je verhaal
                      Creëer je verhaal: heb je geen inspiratie voor een
                      volledig verhaal te schrijven? Bij deze optie geef je een
                      paar stukjes input mee, en hiermee maken wij een verhaal
                      voor jou.
                    </p>
                    <p>
                      <span className={styles.bold}>Doel?</span> Uiteindelijk
                      worden alle verhalen verzameld en kunnen bezoekers hierop
                      stemmen. Eén van deze verhalen met de meeste stemmen zal
                      worden omgezet tot een korte ballet of opera voorstelling.
                    </p>
                    <p>
                      <span className={styles.bold}>Waarom nog wachten? </span>
                      Deel jouw verhaal en laat je horen, net zoals Opera Ballet
                      Vlaanderen.
                    </p>
                    <div className={styles.nav}>
                      <Link
                        to={ROUTES.createStory}
                        className={styles.navigation}
                      >
                        Genereer je verhaal
                      </Link>
                      <Link to={ROUTES.addStory} className={layout.button}>
                        Schrijf je verhaal
                      </Link>
                    </div>
                    <Link to={ROUTES.stories} className={layout.sub}>
                      Ontdek alle verhalen
                    </Link>
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
