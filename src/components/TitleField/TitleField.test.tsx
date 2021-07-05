import { render, screen } from "@testing-library/react";

import React from "react";
import TitleField from "./index";
import { TitleFieldHarness } from "./TitleField.harness";

describe("The TitleField component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <TitleFieldHarness>
        <TitleField />
      </TitleFieldHarness>
    );
    const titleFieldElement = screen.getByRole("textbox");
    expect(titleFieldElement).toBeInTheDocument();
  });
});
