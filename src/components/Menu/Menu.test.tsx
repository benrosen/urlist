import { render, screen } from "@testing-library/react";

import Menu from "./index";
import React from "react";

describe("The Menu component", () => {
  it("renders an element with a navigation role.", () => {
    render(<Menu />);
    const menuElement = screen.getByRole("navigation");
    expect(menuElement).toBeInTheDocument();
  });
});
