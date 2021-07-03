import MenuComponent from "./index";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: MenuComponent,
  title: "Components/Menu",
} as Meta;

export const Menu = () => <MenuComponent />;
