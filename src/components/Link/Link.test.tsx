import { render, screen } from "@testing-library/react";

import Link from "./index";
import React from "react";

describe("The Link component", () => {
  it("renders an element with a listitem role.", () => {
    render(<Link />);
    const linkElement = screen.getByRole("listitem");
    expect(linkElement).toBeInTheDocument();
  });
});