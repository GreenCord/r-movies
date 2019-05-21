import React from "react";

import "./MovieDetailContainer.scss";

import MoviePrimaryContainer from "./MoviePrimaryContainer";
import MovieSecondaryContainer from "./MovieSecondaryContainer";
import PosterContainer from "./PosterContainer";
// import VideosContainer from "./VideosContainer";
import Button from "../Utilities/Button";

const MovieDetailContainer = props => {
  const selectedMovie = [props.selectedMovie, props.selectedMovie];
  const recommendedMovies = [{ firstMovie: null }].concat(
    props.selectedMovie.recommendations.results.slice(0, 4)
  );

  return (
    <>
      <MoviePrimaryContainer
        movies={selectedMovie}
        imgUrl={props.imgUrl + props.size.original}
        displayDescription={props.displayDescription}
        displayCta={props.displayCta}
        onClick={props.onClick}
        remove={true}
        buttonText={"Back to Movie List"}
      />
      <PosterContainer
        imgUrl={props.imgUrl + props.size.w500}
        posterPath={props.selectedMovie.poster_path}
        title={props.selectedMovie.title}
        overview={props.selectedMovie.overview}
      />
      {/* <VideosContainer
        videos={props.selectedMovie.videos.results}
        headerText={"Watch the Latest Trailers"}
      /> */}
      {props.selectedMovie.genres[0].name !== "Error" && (
        <section className="movie-detail-wrapper">
          <div className="movie-detail-container">
            <section className="movie-detail-reviews">
              <h2 className="section-header">Reviews</h2>
              {props.selectedMovie.reviews.results.length > 0 ? (
                props.selectedMovie.reviews.results.map((review, i) => (
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
                ))
              ) : (
                <div className="no-content">
                  <p>
                    This movie is so hot there are no reviews available yet.
                  </p>
                </div>
              )}
            </section>
          </div>
          <section className="return">
            <Button
              onClick={props.onClick}
              movie={selectedMovie[0]}
              remove={true}
              buttonText={"Back to Movie List"}
            />
          </section>
        </section>
      )}
      {props.selectedMovie.recommendations.results.length > 0 && (
        <section className="recommended-wrapper">
          <div className="recommended-container">
            <header>
              <h2>You May Also Like</h2>
            </header>
            <MovieSecondaryContainer
              movies={recommendedMovies}
              imgUrl={props.imgUrl}
              size={props.size}
              displayDescription={true}
              displayCta={false}
              displayPoster={true}
              onClick={props.onClick}
              remove={false}
              buttonText={"Details"}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetailContainer;
