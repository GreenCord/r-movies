import "core-js";
import "raf/polyfill";

import React, { useState, useEffect } from "react";
import axios from "axios";

// Assets
import "./App.scss";

// Components
import Loading from "./components/Utilities/Loading";
import HeaderArea from "./components/Header/HeaderArea";
import MoviePrimaryContainer from "./components/MovieContainer/MoviePrimaryContainer";
import MovieSecondaryContainer from "./components/MovieContainer/MovieSecondaryContainer";

const useAppState = () => {
  const [top5, setTop5] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useState("/api/movies/top5");

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const response = await axios(url);
      console.log("useEffect - getMovies - response", response);
      setTop5(response.data);
      setIsLoading(false);
    };
    getMovies();
  }, [url]);

  // const setAppState = () => {
  //   setTop5(getTop5);
  // };

  return {
    top5,
    isLoading
  };
};

const App = props => {
  const { top5, isLoading } = useAppState();
  const imgUrl = "https://image.tmdb.org/t/p";
  const size = {
    original: "/original",
    w500: "/w500"
  };

  // const background =
  //   "http://image.tmdb.org/t/p/original/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg";
  return (
    <div className="App">
      <div className="flex-wrapper">
        <HeaderArea />
        <main>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <MoviePrimaryContainer
                movies={top5}
                imgUrl={imgUrl + size.original}
              />
              <MovieSecondaryContainer
                movies={top5}
                imgUrl={imgUrl}
                size={size}
              />
              {/* <section className="movie-secondary-wrapper">
                {top5.slice(1, 5).map((movie, i) => (
                  <div key={movie.id} className="movie-secondary-container">
                    <img
                      src={`${imgUrl}${size.w500}` + movie.poster_path}
                      alt={movie.title + ` movie poster`}
                    />
                    <MovieContainer position={i + 2} movie={movie} />
                  </div>
                ))}
              </section> */}
            </>
          )}
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
