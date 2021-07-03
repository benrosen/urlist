import { render, screen } from "@testing-library/react";

import { Logo } from "./Logo";
import React from "react";
import { appTitle } from "./Logo.data.json";

describe("The Logo component", () => {
  it("renders the title of the application.", () => {
    render(<Logo />);
    const logoElement = screen.getByText(appTitle);
    expect(logoElement).toBeInTheDocument();
  });
});
