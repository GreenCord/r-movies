import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HeaderArea from "./HeaderArea";

Enzyme.configure({ adapter: new Adapter() });

describe("HeaderArea Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HeaderArea />, div);
  });
});
