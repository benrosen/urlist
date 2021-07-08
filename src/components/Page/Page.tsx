import { Center, Flex } from "@chakra-ui/layout";

import DisclosureProvider from "components/DisclosureProvider";
import Drawer from "components/Drawer";
import Header from "components/Header";
import List from "components/List";
import { PageProps } from "./Page.props";
import React from "react";

/**
 * The Page component wraps a {@link Header} and a {@link List} in a {@link DisclosureProvider}.
 */
export const Page = (props: PageProps): JSX.Element => {
  return (
    <DisclosureProvider>
      <Flex direction="column">
        <Header />
        <Center p="4">
          <List />
        </Center>
      </Flex>
      <Drawer />
    </DisclosureProvider>
  );
};
