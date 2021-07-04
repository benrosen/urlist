import { render, screen } from "@testing-library/react";

import EndpointField from "./index";
import { EndpointFieldHarness } from "./EndpointField.harness";
import React from "react";

describe("The EndpointField component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <EndpointFieldHarness>
        <EndpointField />
      </EndpointFieldHarness>
    );
    const endpointFieldElement = screen.getByRole("textbox");
    expect(endpointFieldElement).toBeInTheDocument();
  });
});
