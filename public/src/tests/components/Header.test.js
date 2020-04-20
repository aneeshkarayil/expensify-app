import { shallow } from "enzyme";
import React from "react";
import { Header } from "../../components/Header";
import toJSON from "enzyme-to-json";

test(`Should render Header correctly`, () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test(`Should call startLogout when clicked`, () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
