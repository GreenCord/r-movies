import React from "react";

import "./ChevronArrow.scss";

const ChevronArrow = props => {
  return (
    <svg
      className={"chevronArrow " + props.className}
      // width={props.width}
      // height="auto"
      viewbox="40 15 120 270"
    >
      <path
        fill="transparent"
        stroke={props.stroke}
        stroke-width={props.strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 50 25 L 150 150 L 50 275"
      />
    </svg>
  );
};

export default ChevronArrow;
