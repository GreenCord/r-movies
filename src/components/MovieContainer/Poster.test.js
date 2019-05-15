import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Poster from "./Poster";

const state = {
  imgUrl: "https://placehold.it",
  posterPath: "/350x700",
  title: "Title"
};

Enzyme.configure({ adapter: new Adapter() });

describe("Poster Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Poster {...state} />, div);
  });

  describe("Rendered component", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<Poster {...state} />);
    });

    it("should have the poster-image class set", () => {
      const componentProps = wrapper.find("img.poster-image").props().className;
      expect(componentProps).toBe("poster-image");
    });

    it("should have alt text", () => {
      const componentProps = wrapper.find("img.poster-image").props().alt;
      expect(componentProps).toBe("Poster for Title");
    });
    it("should have a complete src for the img", () => {
      const componentProps = wrapper.find("img.poster-image").props().src;
      expect(componentProps).toBe("https://placehold.it/350x700");
    });
  });
});
