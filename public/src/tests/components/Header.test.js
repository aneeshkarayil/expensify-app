import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";

test(`Should render Header correctly`, () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
