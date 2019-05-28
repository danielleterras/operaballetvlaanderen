import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.landing}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.performances}> Performances</Link>
        </li>
        <li>
          <Link to={ROUTES.stories}> Stories</Link>
        </li>
        <li>
          <Link to={ROUTES.about}> About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
