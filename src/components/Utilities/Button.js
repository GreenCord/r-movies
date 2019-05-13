import React from "react";

import "./Button.scss";

const Button = props => {
  return (
    <button
      onClick={() => {
        props.onClick(props.movie, props.remove);
      }}
      className="btn btn-solid"
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
