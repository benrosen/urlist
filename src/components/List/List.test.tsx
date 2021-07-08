import { render, screen } from "@testing-library/react";

import List from "./index";
import { ListHarness } from "./List.harness";
import React from "react";

describe("The List component", () => {
  it("renders an element with a main role.", () => {
    render(
      <ListHarness>
        <List />
      </ListHarness>
    );
    const listElement = screen.getByRole("main");
    expect(listElement).toBeInTheDocument();
  });
});
