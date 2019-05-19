import React from "react";

import Poster from "./Poster";

import "./PosterContainer.scss";

const PosterContainer = props => {
  return (
    <section className="poster-wrapper">
      <div className="poster-container">
        {props.posterPath.length > 0 && (
          <Poster
            imgUrl={props.imgUrl}
            posterPath={props.posterPath}
            title={props.title}
          />
        )}
        {props.overview.length > 0 && (
          <div className="poster-overview">
            <div className="poster-overview-text">{props.overview}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PosterContainer;
