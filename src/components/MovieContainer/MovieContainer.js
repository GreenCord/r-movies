import React from "react";

import Button from "../Utilities/Button";
import FormatDate from "../FormatDate/FormatDate";

import "./MovieContainer.scss";

const MovieContainer = props => {
  console.log("MovieContainer - release_date", props.movie.release_date);
  return (
    <div className="movie-info-container">
      <div className="flex-wrapper">
        <div className="movie-info-intro">
          {props.movie.genres && (
            <span className="movie-info-genre">
              {props.movie.genres[0].name}
            </span>
          )}
          {props.movie.release_date && (
            <span className="movie-info-releaseDate">
              Released: <FormatDate date={props.movie.release_date} />
            </span>
          )}
        </div>
        <h1 className="movie-info-title">{props.movie.title}</h1>
        <p className="movie-info-tagline">{props.movie.tagline}</p>
        {props.displayDescription && (
          <p className="movie-info-description">
            {props.movie.overview.length > 250
              ? props.movie.overview.slice(0, 250) + "..."
              : props.movie.overview}
          </p>
        )}
      </div>
      {props.displayCta && (
        <Button
          onClick={props.onClick}
          movie={props.movie}
          remove={props.remove}
          buttonText={props.buttonText}
          className={props.buttonClass}
        />
      )}
    </div>
  );
};

export default MovieContainer;
