import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom";

import HomePage from "../src/pages/Non-Admin/HomePage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<HomePage />, div);
});

it("Matches Snapshot", () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
