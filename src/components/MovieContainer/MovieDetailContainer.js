import React from "react";

import "./MovieDetailContainer.scss";

import MoviePrimaryContainer from "./MoviePrimaryContainer";

const MovieDetailContainer = props => {
  const selectedMovie = [props.selectedMovie];

  return (
    <>
      <MoviePrimaryContainer
        movies={selectedMovie}
        imgUrl={props.imgUrl + props.size.original}
      />
      <section className="movie-detail-wrapper">
        <div className="movie-detail-container">
          <header>
            <p>
              <button
                onClick={() => props.onClick(props.selectedMovie, true)}
                style={{ backgroundColor: "#00cc00" }}
              >
                Temp: Click to Close
              </button>
            </p>
            <h2>Overview</h2>
            <p>{props.selectedMovie.overview}</p>
            <img
              src={
                props.imgUrl + props.size.w500 + props.selectedMovie.poster_path
              }
              alt={"Poster for: " + props.selectedMovie.title}
            />
          </header>
          <section>
            <h2>Reviews</h2>
            {props.selectedMovie.reviews.results.map((review, i) => (
              <div key={review.author + i}>
                <p className="review-byLine">{review.author}</p>
                <p>
                  {review.content.length > 250
                    ? review.content.slice(0, 250) + "..."
                    : review.content}
                </p>
                <p>
                  <a href={review.url} title={"Review by " + review.author}>
                    Read Full Review
                  </a>
                </p>
              </div>
            ))}
          </section>
          <section>
            <h2>Videos</h2>
            <div>Temp</div>
          </section>
        </div>
      </section>
    </>
  );
};

export default MovieDetailContainer;
