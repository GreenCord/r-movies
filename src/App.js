import "core-js";
import "raf/polyfill";

import React, { useState, useEffect } from "react";
import axios from "axios";

// Assets
import "./App.scss";

// Components
import Loading from "./components/Utilities/Loading";
import HeaderArea from "./components/Header/HeaderArea";
import MovieDetailContainer from "./components/MovieContainer/MovieDetailContainer";
import MoviePrimaryContainer from "./components/MovieContainer/MoviePrimaryContainer";
import MovieSecondaryContainer from "./components/MovieContainer/MovieSecondaryContainer";

// Temporary Data for Development
// import tempSelectedMovie from "./tempdata/tempSelectedMovie.json";
// import tempTop5 from "./tempdata/temp5.json";

const useAppState = () => {
  // Set these for dev, no API calls
  // const [top5, setTop5] = useState(tempTop5);
  // const [isLoading, setIsLoading] = useState(false);
  // const [selectedMovie, setSelectedMovie] = useState(tempSelectedMovie);

  // Set these for builds
  const [top5, setTop5] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});

  // Static definitions, may use state in the future
  const [url] = useState("/api/movies/top5");
  const [imgUrl] = useState("https://image.tmdb.org/t/p");
  const [size] = useState({
    original: "/original",
    w500: "/w500"
  });

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      // Set for dev - no API calls
      // setTop5(tempTop5);
      // Set for builds
      const response = await axios(url);
      setTop5(response.data);

      setIsLoading(false);
    };
    getMovies();
  }, [url]);

  const selectIt = (obj, remove) => {
    remove ? setSelectedMovie({}) : setSelectedMovie(obj);
  };

  return {
    top5,
    isLoading,
    selectedMovie,
    imgUrl,
    size,
    selectIt
  };
};

const App = props => {
  const {
    top5,
    isLoading,
    selectedMovie,
    imgUrl,
    size,
    selectIt
  } = useAppState();

  const onSelectItem = (item, remove) => {
    selectIt(item, remove);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <div className="flex-wrapper">
        <HeaderArea onClick={onSelectItem} />
        <main>
          {selectedMovie.hasOwnProperty("id") ? (
            <MovieDetailContainer
              selectedMovie={selectedMovie}
              imgUrl={imgUrl}
              size={size}
              displayDescription={false}
              displayCta={true}
              onClick={onSelectItem}
            />
          ) : isLoading ? (
            <Loading />
          ) : (
            <>
              <MoviePrimaryContainer
                movies={top5}
                imgUrl={imgUrl + size.original}
                displayDescription={true}
                displayCta={true}
                onClick={onSelectItem}
                remove={false}
                buttonText={"Details"}
              />
              <MovieSecondaryContainer
                movies={top5}
                imgUrl={imgUrl}
                size={size}
                displayDescription={true}
                displayCta={true}
                onClick={onSelectItem}
                remove={false}
                buttonText={"Details"}
              />
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
