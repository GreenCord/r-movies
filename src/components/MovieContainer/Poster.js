import React from "react";

import "./Poster.scss";

const Poster = props => {
  return (
    <img
      className="poster-image"
      src={props.imgUrl + props.posterPath}
      alt={"Poster for " + props.title}
    />
  );
};

export default Poster;
