import { Meta, Story } from "@storybook/react";

import LinkComponent from "./index";
import { LinkProps } from "./Link.props";
import React from "react";

export default {
  component: LinkComponent,
  title: "Components/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <LinkComponent {...args} />;

export const Example = Template.bind({});

Example.args = {
  url: "https://example.com",
  title: "An example link",
};
