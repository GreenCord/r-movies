import React from "react";

import "./HeaderArea.scss";
import logo from "../../logo.svg";

const HeaderArea = props => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <img
          src={logo}
          onClick={() => {
            props.onClick({ movie: null }, true);
          }}
          alt="nevizen"
        />
        <nav class="temporary">Top 5 Most Popular Movies</nav>
      </div>
    </header>
  );
};

export default HeaderArea;
