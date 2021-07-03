import { Meta, Story } from "@storybook/react";

import React from "react";
import SubmitButtonComponent from "./index";
import { SubmitButtonProps } from "./SubmitButton.props";

export default {
  component: SubmitButtonComponent,
  title: "Components/SubmitButton",
} as Meta;

export const SubmitButton: Story<SubmitButtonProps> = (args) => (
  <SubmitButtonComponent {...args} />
);
