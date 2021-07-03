import { Logo as LogoComponent } from "./Logo";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: LogoComponent,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  title: "Components/Logo",
} as Meta;

export const Logo = () => <LogoComponent />;
