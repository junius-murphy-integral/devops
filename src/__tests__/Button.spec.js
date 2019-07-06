import React from "react";
import { create } from "react-test-renderer";

/* Original Component From https://www.valentinog.com/blog/testing-react/ */
function Button(props){
  return <button>Nothing to do for now</button>;
}

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});