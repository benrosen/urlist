import { Heading } from "@chakra-ui/layout";
import { LogoProps } from "./Logo.props";
import React from "react";
import config from "./Logo.config.json";

/**
 * The Logo component displays the app brand mark.
 */
export const Logo = (props: LogoProps): JSX.Element => {
  return <Heading>{config.appTitle}</Heading>;
};
