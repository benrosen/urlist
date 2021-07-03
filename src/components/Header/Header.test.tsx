import { render, screen } from "@testing-library/react";

import Header from "./index";
import React from "react";

describe("The Header component", () => {
  it("renders an element with a banner role.", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });
});