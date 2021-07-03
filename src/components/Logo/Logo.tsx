import { Heading } from "@chakra-ui/layout";
import { LogoProps } from "./Logo.props";
import React from "react";
import { appTitle } from "./Logo.data.json";

/**
 * The Logo component displays the app brand mark.
 *
 * @todo Logo stories
 */
export const Logo = (props: LogoProps): JSX.Element => {
  return <Heading>{appTitle}</Heading>;
};
