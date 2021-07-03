import HeaderComponent from "./index";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: HeaderComponent,
  title: "Components/Header",
} as Meta;

export const Header = () => <HeaderComponent />