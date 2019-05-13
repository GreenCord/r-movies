import React from "react";

import "./MovieDetailContainer.scss";

import MoviePrimaryContainer from "./MoviePrimaryContainer";
import PosterContainer from "./PosterContainer";
import Button from "../Utilities/Button";

const MovieDetailContainer = props => {
  const selectedMovie = [props.selectedMovie, props.selectedMovie];

  return (
    <>
      <MoviePrimaryContainer
        movies={selectedMovie}
        imgUrl={props.imgUrl + props.size.original}
        displayDescription={false}
        displayCta={true}
        onClick={props.onClick}
        movie={selectedMovie[0]}
        remove={true}
        buttonText={"Back to Movie List"}
      />
      <PosterContainer
        imgUrl={props.imgUrl + props.size.w500}
        posterPath={props.selectedMovie.poster_path}
        title={props.selectedMovie.title}
        overview={props.selectedMovie.overview}
      />
      <section className="movie-detail-wrapper">
        <div className="movie-detail-container">
          <section class="movie-detail-reviews">
            <h2 class="section-header">Reviews</h2>
            {props.selectedMovie.reviews.results.map((review, i) => (
              <div className="section-item" key={review.author + i}>
                <p className="section-byLine">{review.author}</p>
                <p>
                  {review.content.length > 250
                    ? review.content.slice(0, 250) + "..."
                    : review.content}
                </p>
                <p>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={"Review by " + review.author}
                  >
                    Read Full Review
                  </a>
                </p>
              </div>
            ))}
          </section>
        </div>
        <section class="return">
          <Button
            onClick={props.onClick}
            movie={selectedMovie[0]}
            remove={true}
            buttonText={"Back to Movie List"}
          />
        </section>
      </section>
    </>
  );
};

export default MovieDetailContainer;
