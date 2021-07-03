import { render, screen } from "@testing-library/react";

import React from "react";
import ThemeToggle from "./index";

describe("The ThemeToggle component", () => {
  it("renders an element with a button role.", () => {
    render(<ThemeToggle />);
    const themeToggleElement = screen.getByRole("button");
    expect(themeToggleElement).toBeInTheDocument();
  });
  /** @todo test ThemeToggle icon change */
  //   it("changes icons when clicked.", () => {
  //     //
  //   });
  /** @todo test ThemeToggle color mode change */
  //   it("changes the color mode when clicked.", () => {
  //     //
  //   });
});
