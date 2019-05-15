import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieContainer from "./MovieContainer";

import tempSelectedMovie from "../../tempdata/tempSelectedMovie.json";

const props = {
  movie: tempSelectedMovie,
  displayDescription: true,
  displayCta: false
};

Enzyme.configure({ adapter: new Adapter() });

describe("MovieContainer Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MovieContainer
        movie={props.movie}
        displayDescription={props.displayDescription}
        displayCta={props.displayCta}
      />,
      div
    );
  });
});
