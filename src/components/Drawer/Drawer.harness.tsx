import { DisclosureContext } from "components/DisclosureProvider";
import { DrawerHarnessProps } from "./Drawer.harness.props";
import React from "react";

export const DrawerHarness = ({
  children,
}: DrawerHarnessProps): JSX.Element => {
  return (
    <DisclosureContext.Provider value={{ isOpen: true, onClose: () => {} }}>
      {children}
    </DisclosureContext.Provider>
  );
};
