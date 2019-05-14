import React from "react";

import "./HeaderArea.scss";
import logo from "../../logo.svg";

const HeaderArea = props => {
  return (
    <header className="headerArea">
      <img
        src={logo}
        onClick={() => {
          props.onClick({ movie: null }, true);
        }}
        alt="nevizen"
      />
      <div>Top 5 Most Popular Movies</div>
    </header>
  );
};

export default HeaderArea;
