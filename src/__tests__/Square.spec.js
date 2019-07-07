import React from "react";
import { create } from "react-test-renderer";
import Square from "../Square";
import Board from "../Board";

describe("Square component", () => {
  test("Matches the snapshot", () => {
      const square = create(<Square />);
      expect(square.toJSON()).toMatchSnapshot();
  });
});


describe("Square component", () => {
    test("Clicked square's text alternate between 'X' & 'O'", () => {
      const boardComponent = create(<Board/>);
      const boardInstance = boardComponent.root;
      const buttons = boardInstance.findAllByType("button");
      buttons[0].props.onClick();
      expect(buttons[0].props.children).toBe("X");
      buttons[1].props.onClick();
      expect(buttons[1].props.children).toBe("O");
      buttons[2].props.onClick();
      expect(buttons[2].props.children).toBe("X");

      buttons[3].props.onClick();
      expect(buttons[3].props.children).toBe("O");
      buttons[4].props.onClick();
      expect(buttons[4].props.children).toBe("X");
      buttons[5].props.onClick();
      expect(buttons[5].props.children).toBe("O");

      buttons[6].props.onClick();
      expect(buttons[6].props.children).toBe("X");
      buttons[7].props.onClick();
      expect(buttons[7].props.children).toBe(null);
      buttons[8].props.onClick();
      expect(buttons[8].props.children).toBe(null);
    });
});
