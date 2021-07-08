import { render, screen } from "@testing-library/react";

import LinksField from "./index";
import { LinksFieldHarness } from "./LinksField.harness";
import React from "react";

describe("The LinksField component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <LinksFieldHarness>
        <LinksField />
      </LinksFieldHarness>
    );
    const listFieldElement = screen.getByRole("textbox");
    expect(listFieldElement).toBeInTheDocument();
  });
});
