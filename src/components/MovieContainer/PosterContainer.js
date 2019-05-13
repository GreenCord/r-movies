import React from "react";

import "./PosterContainer.scss";

const PosterContainer = props => {
  return (
    <section className="poster-wrapper">
      <div className="poster-container">
        <img
          src={props.imgUrl + props.posterPath}
          alt={"Poster for " + props.title}
        />
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
