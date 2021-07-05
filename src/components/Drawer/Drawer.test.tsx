import { render, screen } from "@testing-library/react";

import Drawer from "./index";
import { DrawerHarness } from "./Drawer.harness";
import React from "react";

describe("The Drawer component", () => {
  it("renders an element with a form role.", () => {
    render(
      <DrawerHarness>
        <Drawer />
      </DrawerHarness>
    );
    const drawerElement = screen.getByRole("dialog");
    expect(drawerElement).toBeInTheDocument();
  });
});
