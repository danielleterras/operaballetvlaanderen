import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import styles from "./story.module.css";
import layout from "./layout.module.css";

const Stories = () => {
  return (
    <div className="section">
      <div className={styles.storyparagraph}>
        <h3>Genoeg vragen.</h3>
        <h2>Dit is jouw verhaal</h2>
        <p>story.title</p>
        <p className={styles.italic}>"story.anekdote"</p>
        <p>En dat is hoe het verhaal van story.author begint…</p>
        <p>story.story</p>
        <input
          type="submit"
          className={layout.button}
          value="Deel mijn verhaal"
        />
        <Link to={ROUTES.stories} className={layout.sub}>
          Ontdek alle verhalen
        </Link>
      </div>
    </div>
  );
};

export default inject(`storiesTemplateStore`)(observer(Stories));
