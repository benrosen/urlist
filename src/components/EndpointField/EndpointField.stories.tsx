import EndpointFieldComponent from "./index";
import { EndpointFieldHarness } from "./EndpointField.harness";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: EndpointFieldComponent,
  decorators: [
    (Story) => {
      return (
        <EndpointFieldHarness>
          <Story />
        </EndpointFieldHarness>
      );
    },
  ],
  title: "Components/EndpointField",
} as Meta;

export const EndpointField = () => <EndpointFieldComponent />;
