import { render, screen } from "@testing-library/react";

import ListField from "./index";
import { ListFieldHarness } from "./ListField.harness";
import React from "react";

describe("The ListField component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <ListFieldHarness>
        <ListField />
      </ListFieldHarness>
    );
    const listFieldElement = screen.getByRole("textbox");
    expect(listFieldElement).toBeInTheDocument();
  });
});
