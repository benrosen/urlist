import { render, screen } from "@testing-library/react";

import { DescriptionField } from "./DescriptionField";
import { DescriptionFieldHarness } from "./DescriptionField.harness";
import React from "react";

describe("The DescriptionField component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <DescriptionFieldHarness>
        <DescriptionField />
      </DescriptionFieldHarness>
    );
    const descriptionFieldElement = screen.getByRole("textbox");
    expect(descriptionFieldElement).toBeInTheDocument();
  });
});
