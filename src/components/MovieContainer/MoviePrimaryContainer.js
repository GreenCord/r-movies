import React from "react";

import MovieContainer from "./MovieContainer";

import "./MoviePrimaryContainer.scss";

const MoviePrimaryContainer = props => {
  console.log("MoviePrimaryContainer - props", props);
  const backdrop_path =
    props.movies.length === 0
      ? "https://placehold.it/1920x1280"
      : props.imgUrl + props.movies[0].backdrop_path;

  return (
    <section
      className="movie-primary-wrapper"
      style={{
        backgroundImage: `url(${backdrop_path})`
      }}
    >
      <div className="movie-primary-container">
        <MovieContainer position="1" movie={props.movies[0]} />
      </div>
    </section>
  );
};

export default MoviePrimaryContainer;
