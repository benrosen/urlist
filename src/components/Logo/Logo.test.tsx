import { render, screen } from "@testing-library/react";

import Logo from "./index";
import React from "react";
import config from "./Logo.config.json";

describe("The Logo component", () => {
  it("renders the title of the application.", () => {
    render(<Logo />);
    const logoElement = screen.getByText(config.appTitle);
    expect(logoElement).toBeInTheDocument();
  });
});
