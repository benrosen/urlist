import DescriptionFieldComponent from "./index";
import { DescriptionFieldHarness } from "./DescriptionField.harness";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: DescriptionFieldComponent,
  decorators: [
    (Story) => {
      return (
        <DescriptionFieldHarness>
          <Story />
        </DescriptionFieldHarness>
      );
    },
  ],
  title: "Components/DescriptionField",
} as Meta;

export const DescriptionField = () => <DescriptionFieldComponent />;
