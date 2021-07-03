import { Logo as LogoComponent } from "./Logo";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: LogoComponent,
  title: "Components/Logo",
} as Meta;

export const Logo = () => <LogoComponent />;
