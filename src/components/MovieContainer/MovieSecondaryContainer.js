import React from "react";

import "./MovieSecondaryContainer.scss";

import MovieContainer from "./MovieContainer";

const MovieSecondaryContainer = props => {
  return (
    <section className="movie-secondary-wrapper">
      {props.movies.slice(1, 5).map((movie, i) => (
        <div
          key={movie.id}
          onClick={() => props.onClick(movie, false)}
          className="movie-secondary-container"
        >
          <img
            src={`${props.imgUrl}${props.size.w500}` + movie.backdrop_path}
            alt={movie.title + ` movie poster`}
          />
          <MovieContainer
            movie={movie}
            displayDescription={props.displayDescription}
            displayCta={props.displayCta}
            onClick={props.onClick}
            remove={props.remove}
            buttonText={props.buttonText}
          />
        </div>
      ))}
    </section>
  );
};

export default MovieSecondaryContainer;
