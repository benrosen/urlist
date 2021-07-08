import { render, screen } from "@testing-library/react";

import CopyButton from "./index";
import React from "react";

describe("The CopyButton component", () => {
  it("renders an element with a button role.", () => {
    render(<CopyButton />);
    const copyButtonElement = screen.getByRole("button");
    expect(copyButtonElement).toBeInTheDocument();
  });
});