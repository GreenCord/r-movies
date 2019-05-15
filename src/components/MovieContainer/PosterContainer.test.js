import React from "react";
import ReactDOM from "react-dom";
import Enzyme /*mount, shallow, render*/ from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PosterContainer from "./PosterContainer";

import tempSelectedMovie from "../../tempdata/tempSelectedMovie.json";

const props = {
  selectedMovie: tempSelectedMovie,
  imgUrl: "https://image.tmdb.org/t/p",
  size: {
    original: "/original",
    w500: "/w500"
  }
};

Enzyme.configure({ adapter: new Adapter() });

describe("PosterContainer Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PosterContainer
        imgUrl={props.imgUrl + props.size.w500}
        posterPath={props.selectedMovie.poster_path}
        title={props.selectedMovie.title}
        overview={props.selectedMovie.overview}
      />,
      div
    );
  });
});
