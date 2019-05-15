import React from "react";
import ReactDOM from "react-dom";
import Enzyme /*mount, shallow, render*/ from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieDetailContainer from "./MovieDetailContainer";

import tempSelectedMovie from "../../tempdata/tempSelectedMovie.json";

const props = {
  movie: tempSelectedMovie,
  url: "/api/movies/top5",
  findUrl: "/api/movies/search",
  imgUrl: "https://image.tmdb.org/t/p",
  size: {
    original: "/original",
    w500: "/w500"
  }
};

Enzyme.configure({ adapter: new Adapter() });

describe("MovieDetailContainer Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MovieDetailContainer
        selectedMovie={props.movie}
        imgUrl={props.imgUrl}
        size={props.size}
        displayDescription={false}
        displayCta={true}
        onClick={console.log}
      />,
      div
    );
  });
});
