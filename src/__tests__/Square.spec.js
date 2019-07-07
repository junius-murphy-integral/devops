import React from "react";
import { create } from "react-test-renderer";
import Square from "../Square";

describe("Square component", () => {
  test("Matches the snapshot", () => {
    const square = create(<Square />);
    expect(square.toJSON()).toMatchSnapshot();
  });
});