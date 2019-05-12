import React from "react";

import MovieContainer from "./MovieContainer";

import "./MoviePrimaryContainer.scss";

const MoviePrimaryContainer = props => {
  const thisImgUrl = props.imgUrl + props.movies[0].backdrop_path;
  return (
    <section
      className="movie-primary-wrapper"
      style={{
        backgroundImage: `url(${thisImgUrl})`
      }}
    >
      <div className="movie-primary-container">
        <MovieContainer position="1" movie={props.movies[0]} />
      </div>
    </section>
  );
};

export default MoviePrimaryContainer;
