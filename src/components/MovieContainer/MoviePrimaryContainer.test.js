import React from "react";
import ReactDOM from "react-dom";
import Enzyme /*mount, shallow, render*/ from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MoviePrimaryContainer from "./MoviePrimaryContainer";

import tempSelectedMovie from "../../tempdata/tempSelectedMovie.json";
import tempTop5 from "../../tempdata/temp5.json";

const props = {
  movie: tempSelectedMovie,
  top5: tempTop5,
  url: "/api/movies/top5",
  findUrl: "/api/movies/search",
  imgUrl: "https://image.tmdb.org/t/p",
  size: {
    original: "/original",
    w500: "/w500"
  }
};

Enzyme.configure({ adapter: new Adapter() });

describe("MoviePrimaryContainer Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MoviePrimaryContainer
        movies={props.top5}
        imgUrl={props.imgUrl + props.size.original}
        displayDescription={true}
        displayCta={true}
        displayVideo={false}
        onClick={console.log}
        remove={false}
        buttonText={"Details"}
      />,
      div
    );
  });
});
