import { Meta } from "@storybook/react";
import React from "react";
import ThemeToggleComponent from "./index";

export default {
  component: ThemeToggleComponent,
  title: "Components/ThemeToggle",
} as Meta;

export const ThemeToggle = () => <ThemeToggleComponent />;
