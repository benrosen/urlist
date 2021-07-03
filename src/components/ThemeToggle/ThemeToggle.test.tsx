import { render, screen } from "@testing-library/react";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

describe("The ThemeToggle component", () => {
  it("should render an element with a button role.", () => {
    render(<ThemeToggle />);
    const themeToggleElement = screen.getByRole("button");
    expect(themeToggleElement).toBeInTheDocument();
  });
  //   it("should change icons when clicked.", () => {
  //     //
  //   });
  //   it("should change the color mode when clicked.", () => {
  //     //
  //   });
});
