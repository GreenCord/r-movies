import React from "react";

import "./MovieSecondaryContainer.scss";

import MovieContainer from "./MovieContainer";

const MovieSecondaryContainer = props => {
  return (
    <section className="movie-secondary-wrapper">
      {props.movies.slice(1, 5).map((movie, i) => (
        <div
          key={movie.id}
          onClick={() => props.onClick(movie, i + 2)}
          className="movie-secondary-container"
        >
          <img
            src={`${props.imgUrl}${props.size.w500}` + movie.backdrop_path}
            alt={movie.title + ` movie poster`}
          />
          <MovieContainer
            position={i + 2}
            movie={movie}
            displayDescription={props.displayDescription}
            displayCta={props.displayCta}
          />
        </div>
      ))}
    </section>
  );
};

export default MovieSecondaryContainer;
