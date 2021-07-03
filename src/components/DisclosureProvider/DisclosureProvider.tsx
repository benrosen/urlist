import { DisclosureContext } from "./index";
import { DisclosureProviderProps } from "./DisclosureProvider.props";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

/**
 * The DisclosureProvider component.
 *
 * @todo implement DisclosureProvider component
 */
export const DisclosureProvider = (
  props: DisclosureProviderProps
): JSX.Element => {
  const disclosure = useDisclosure();
  return (
    <DisclosureContext.Provider value={disclosure}>
      {props.children}
    </DisclosureContext.Provider>
  );
};
