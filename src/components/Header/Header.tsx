import { Center, Flex, Spacer } from "@chakra-ui/layout";

import Logo from "components/Logo";
import Menu from "components/Menu";
import React from "react";

/**
 * The Header component displays the {@link Logo} and the {@link Menu} at the top of the page.
 */
export const Header = (): JSX.Element => {
  return (
    <Flex p="4" role="banner">
      <Center pl={2}>
        <Logo />
      </Center>
      <Spacer />
      <Menu />
    </Flex>
  );
};
