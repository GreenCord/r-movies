import React from "react";

import "./HeaderArea.scss";
import logo from "../../logo.svg";

const HeaderArea = () => {
  return (
    <header className="headerArea">
      <img src={logo} alt="nevizen" />
      <div>Top 5 Most Popular Movies</div>
    </header>
  );
};

export default HeaderArea;
