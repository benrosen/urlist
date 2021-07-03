import { render, screen } from "@testing-library/react";

import React from "react";
import SubmitButton from "./index";

describe("The SubmitButton component", () => {
  it("renders an element with a button role.", () => {
    render(<SubmitButton formId="test" />);
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
