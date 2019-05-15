import React from "react";

import "./Button.scss";

const Button = props => {
  return (
    <button
      onClick={() => {
        props.onClick(props.movie, props.remove);
      }}
      className={props.className}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
