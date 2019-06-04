import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Stories from "./Stories";
import Cube from "./Cube";

import "./styles.css";
import styles from "./home.module.css";
import mouse from "./../assets/scroll_icon.svg";
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
                {/*<Cube />*/}
                <div className={styles.scroll}>
                  <img src={mouse} alt="mouse" width="44" height="44" />
                  <p>Scroll naar beneden om te ontdekken</p>
                </div>
              </div>
              <div className="section">
                <h1>
                  Ontmoet <b>Cubo</b>
                </h1>
                <div className={styles.cube}>{/*<Cube />*/}</div>
                <p>Ervaar op een unieke manier</p>
                <button className={styles.button}>Lees alle verhalen</button>
              </div>
              <div className="section">
                <div className="testing">
                  {/*<Cube />*/}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    molestiae corporis libero quisquam ut amet quia ea
                    laudantium saepe minus unde ipsum culpa temporibus et quam
                    numquam quo, nobis fuga.
                  </p>
                  <button className={styles.button}>
                    Ontdek andere verhalen
                  </button>
                  <button className={styles.button}>Deel je verhaal</button>
                </div>
              </div>
              <div className="section">
                {/*<Cube />*/}
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                  <h2>Wat is de titel van je verhaal?</h2>
                  <input
                    type="text"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                  />
                </div>
              </div>
              <div className="section">
                {/*<Cube />*/}
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                  <h2>Wat is jou naam?</h2>
                  <input
                    type="text"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                  />
                </div>
              </div>
              <div className="section">
                {/*<Cube />*/}
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                  <h2>Wie zou je willen zijn?</h2>
                  <input
                    type="text"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                  />
                </div>
              </div>
              <div className="section">
                {/*<Cube />*/}
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                  <h2>Welke stijl verkies je?</h2>
                  <input
                    type="text"
                    placeholder="Typ hier je antwoord"
                    className={styles.inputField}
                  />
                </div>
              </div>
              <div className="section">
                {/*<Cube />*/}
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                  <h2>Vertel een leuke anekdote over jezelf.</h2>
                  <textarea
                    placeholder="Typ hier je antwoord"
                    className={styles.textField}
                  />
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
                  <button className={styles.submit}>Deel je verhaal</button>
                  <button className={styles.button}>
                    Ontdek andere verhalen
                  </button>
                </div>
              </div>
              <div className="section">
                <Stories />
              </div>
              <div className="section">
                <h3>What is your story?</h3>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
