import { render, screen } from "@testing-library/react";

import CreateButton from "./index";
import React from "react";

describe("The CreateButton component", () => {
  it("renders an element with a button role.", () => {
    render(<CreateButton />);
    const createButtonElement = screen.getByRole("button");
    expect(createButtonElement).toBeInTheDocument();
  });
});