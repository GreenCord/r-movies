import React from "react";

import MovieContainer from "./MovieContainer";

import "./MoviePrimaryContainer.scss";

const MoviePrimaryContainer = props => {
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
        <MovieContainer
          movie={props.movies[0]}
          displayDescription={props.displayDescription}
          displayCta={props.displayCta}
          onClick={props.onClick}
          remove={props.remove}
          buttonText={props.buttonText}
        />
      </div>
    </section>
  );
};

export default MoviePrimaryContainer;
