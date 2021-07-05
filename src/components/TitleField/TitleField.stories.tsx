import { Meta } from "@storybook/react";
import React from "react";
import TitleFieldComponent from "./index";
import { TitleFieldHarness } from "./TitleField.harness";

export default {
  component: TitleFieldComponent,
  decorators: [
    (Story) => {
      return (
        <TitleFieldHarness>
          <Story />
        </TitleFieldHarness>
      );
    },
  ],
  title: "Components/TitleField",
} as Meta;

export const TitleField = () => <TitleFieldComponent />;
