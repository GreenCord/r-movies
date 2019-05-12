import React from "react";

import FormatDate from "../FormatDate/FormatDate";

import "./MovieContainer.scss";

const MovieContainer = props => {
  console.log("props", props);
  return (
    <div className="movie-info-container">
      <div className="movie-info-intro">
        <span className="movie-info-position">#{props.position}</span>
        <span className="movie-info-genre">{props.movie.genres[0].name}</span>
        <span className="movie-info-releaseDate">
          Released: <FormatDate date={props.movie.release_date} />
        </span>
      </div>
      <h1 className="movie-info-title">{props.movie.title}</h1>
      <p className="movie-info-tagline">{props.movie.tagline}</p>
      <p className="movie-info-description">{props.movie.overview}</p>
      {/* <button className="btn btn-solid">Details</button> */}
    </div>
  );
};

export default MovieContainer;
