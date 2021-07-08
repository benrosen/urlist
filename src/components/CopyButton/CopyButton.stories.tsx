import { Meta, Story } from "@storybook/react";

import CopyButtonComponent from "./index";
import { CopyButtonProps } from "./CopyButton.props";
import React from "react";

export default {
  component: CopyButtonComponent,
  title: "Components/CopyButton",
} as Meta;

const Template: Story<CopyButtonProps> = (args) => (
  <CopyButtonComponent {...args} />
);

export const Example = Template.bind({});

Example.args = {
  value: "example",
};
