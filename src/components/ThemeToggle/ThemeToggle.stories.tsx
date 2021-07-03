import { Meta } from "@storybook/react";
import React from "react";
import { ThemeToggle as ThemeToggleComponent } from "./ThemeToggle";

export default {
  component: ThemeToggleComponent,
  title: "Components/ThemeToggle",
} as Meta;

export const ThemeToggle = () => <ThemeToggleComponent />;
