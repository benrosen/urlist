import DisclosureProvider from "components/DisclosureProvider";
import Drawer from "components/Drawer";
import { Flex } from "@chakra-ui/layout";
import Header from "components/Header";
import { PageProps } from "./Page.props";
import React from "react";

/**
 * The Page component wraps a {@link Header} and a {@link List} in a {@link DisclosureProvider}.
 *
 * @todo implement List component
 */
export const Page = (props: PageProps): JSX.Element => {
  return (
    <DisclosureProvider>
      <Flex direction="column">
        <Header />
        {/* LIST GOES HERE */}
      </Flex>
      <Drawer />
    </DisclosureProvider>
  );
};
