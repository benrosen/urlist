import LinksFieldComponent from "./index";
import { LinksFieldHarness } from "./LinksField.harness";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: LinksFieldComponent,
  decorators: [
    (Story) => {
      return (
        <LinksFieldHarness>
          <Story />
        </LinksFieldHarness>
      );
    },
  ],
  title: "Components/LinksField",
} as Meta;

export const LinksField = () => <LinksFieldComponent />;
