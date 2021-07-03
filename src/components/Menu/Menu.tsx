import { Box } from "@chakra-ui/layout";
import CreateButton from "components/CreateButton";
import { MenuProps } from "./Menu.props";
import React from "react";
import ThemeToggle from "components/ThemeToggle";

/**
 * The Menu component displays the {@link CreateButton} and the {@link ThemeToggle}.
 *
 * @todo test Menu
 * @todo Menu stories
 */
export const Menu = (props: MenuProps): JSX.Element => {
  return (
    <Box role="navigation" {...props}>
      <CreateButton />
      <ThemeToggle />
    </Box>
  );
};
