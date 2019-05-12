import React, { useState } from "react";

import "./App.scss";
import logo from "./logo.svg";
import json5 from "./tempdata/temp5.json";
// Components
import MoviePrimaryContainer from "./components/MovieContainer/MoviePrimaryContainer";

const useAppState = () => {
  const getTop5 = json5;
  const [top5] = useState(getTop5);

  // const setAppState = () => {
  //   setTop5(getTop5);
  // };

  return {
    top5
  };
};
const App = props => {
  const { top5 } = useAppState();
  const imgUrl = "https://image.tmdb.org/t/p";
  const size = {
    original: "/original",
    w500: "/w500"
  };
  const primary = top5[0];
  console.log("primary", primary);

  // const background =
  //   "http://image.tmdb.org/t/p/original/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg";
  return (
    <div className="App">
      <div className="flex-wrapper">
        <header>
          <img src={logo} alt="nevizen" />
        </header>
        <main>
          <MoviePrimaryContainer
            movies={top5}
            imgUrl={imgUrl + size.original}
          />
          <section className="movie-secondary-wrapper">
            <div className="movie-secondary-container">
              <img
                src="http://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
                alt="temp"
              />
              <div className="movie-info-container">
                <div className="movie-info-intro">
                  <span className="movie-info-genre">Drama</span>
                  <span className="movie-info-releaseDate">
                    October 15, 1999
                  </span>
                </div>
                <h1 className="movie-info-title">Fight Club</h1>
                <p className="movie-info-tagline">Mischief. Mayhem. Soap.</p>
                <p className="movie-info-description">
                  A ticking-time-bomb insomniac and a slippery soap salesman
                  channel primal male aggression into a shocking new form of
                  therapy. Their concept catches on, with underground "fight
                  clubs" forming in every town, until an eccentric gets in the
                  way and ignites an out-of-control spiral toward oblivion.
                </p>
                <button className="btn btn-solid">Details</button>
              </div>
            </div>
            <div className="movie-secondary-container">
              <img
                src="http://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
                alt="temp"
              />
              <div className="movie-info-container">
                <div className="movie-info-intro">
                  <span className="movie-info-genre">Drama</span>
                  <span className="movie-info-releaseDate">
                    October 15, 1999
                  </span>
                </div>
                <h1 className="movie-info-title">Fight Club</h1>
                <p className="movie-info-tagline">Mischief. Mayhem. Soap.</p>
                <p className="movie-info-description">
                  A ticking-time-bomb insomniac and a slippery soap salesman
                  channel primal male aggression into a shocking new form of
                  therapy. Their concept catches on, with underground "fight
                  clubs" forming in every town, until an eccentric gets in the
                  way and ignites an out-of-control spiral toward oblivion.
                </p>
                <button className="btn btn-solid">Details</button>
              </div>
            </div>
            <div className="movie-secondary-container">
              <img
                src="http://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
                alt="temp"
              />
              <div className="movie-info-container">
                <div className="movie-info-intro">
                  <span className="movie-info-genre">Drama</span>
                  <span className="movie-info-releaseDate">
                    October 15, 1999
                  </span>
                </div>
                <h1 className="movie-info-title">Fight Club</h1>
                <p className="movie-info-tagline">Mischief. Mayhem. Soap.</p>
                <p className="movie-info-description">
                  A ticking-time-bomb insomniac and a slippery soap salesman
                  channel primal male aggression into a shocking new form of
                  therapy. Their concept catches on, with underground "fight
                  clubs" forming in every town, until an eccentric gets in the
                  way and ignites an out-of-control spiral toward oblivion.
                </p>
                <button className="btn btn-solid">Details</button>
              </div>
            </div>
            <div className="movie-secondary-container">
              <img
                src="http://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
                alt="temp"
              />
              <div className="movie-info-container">
                <div className="movie-info-intro">
                  <span className="movie-info-genre">Drama</span>
                  <span className="movie-info-releaseDate">
                    October 15, 1999
                  </span>
                </div>
                <h1 className="movie-info-title">Fight Club</h1>
                <p className="movie-info-tagline">Mischief. Mayhem. Soap.</p>
                <p className="movie-info-description">
                  A ticking-time-bomb insomniac and a slippery soap salesman
                  channel primal male aggression into a shocking new form of
                  therapy. Their concept catches on, with underground "fight
                  clubs" forming in every town, until an eccentric gets in the
                  way and ignites an out-of-control spiral toward oblivion.
                </p>
                <button className="btn btn-solid">Details</button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer>
        &copy; 2019 &ndash; Steven Martinez
        <br />
        Movie data from{" "}
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.themoviedb.org
        </a>
      </footer>
    </div>
  );
};

export default App;
