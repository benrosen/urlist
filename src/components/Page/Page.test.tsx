import { render, screen } from "@testing-library/react";

import Page from "./index";
import React from "react";

describe("The Page component", () => {
  it("renders an element with a none role.", () => {
    render(<Page />);
    const bannerElement = screen.getByRole("banner");
    expect(bannerElement).toBeInTheDocument();
  });
});
