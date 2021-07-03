import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import { ThemeToggleProps } from "./ThemeToggle.props";

/**
 * The ThemeToggle component toggles the app theme between light mode and dark mode when clicked.
 *
 * @todo test ThemeToggle
 * @todo ThemeToggle stories
 */
export const ThemeToggle = (props: ThemeToggleProps): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
