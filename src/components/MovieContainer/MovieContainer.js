import React from "react";

import Button from "../Utilities/Button";
import FormatDate from "../FormatDate/FormatDate";

import "./MovieContainer.scss";

const MovieContainer = props => {
  return (
    <div className="movie-info-container">
      <div
        className="flex-wrapper"
        // style={props.displayCta ? { flex: "1 0 auto" } : { flex: "0 0 auto" }}
      >
        <div className="movie-info-intro">
          <span className="movie-info-genre">{props.movie.genres[0].name}</span>
          <span className="movie-info-releaseDate">
            Released: <FormatDate date={props.movie.release_date} />
          </span>
        </div>
        <h1 className="movie-info-title">{props.movie.title}</h1>
        <p className="movie-info-tagline">{props.movie.tagline}</p>
        {props.displayDescription ? (
          <p className="movie-info-description">
            {props.movie.overview.length > 250
              ? props.movie.overview.slice(0, 250) + "..."
              : props.movie.overview}
          </p>
        ) : (
          <></>
        )}
      </div>
      {props.displayCta ? (
        <Button
          onClick={props.onClick}
          movie={props.movie}
          remove={props.remove}
          buttonText={props.buttonText}
        />
      ) : (
        // <button
        //   onClick={() => {
        //     props.onClick(props.movie);
        //   }}
        //   className="btn btn-solid"
        // >
        //   Details
        // </button>
        <></>
      )}
    </div>
  );
};

export default MovieContainer;
