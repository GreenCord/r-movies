import React from "react";
import ReactDOM from "react-dom";
import Enzyme /*mount, shallow, render*/ from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Poster from "./Poster";

import tempSelectedMovie from "../../tempdata/tempSelectedMovie.json";

const props = {
  movie: tempSelectedMovie,
  imgUrl: "https://image.tmdb.org/t/p",
  size: {
    original: "/original",
    w500: "/w500"
  }
};

Enzyme.configure({ adapter: new Adapter() });

describe("Poster Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Poster
        imgUrl={props.imgUrl + props.size.w500}
        posterPath={props.movie.poster_path}
        title={props.movie.title}
      />,
      div
    );
  });
});
