import ListFieldComponent from "./index";
import { ListFieldHarness } from "./ListField.harness";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: ListFieldComponent,
  decorators: [
    (Story) => {
      return (
        <ListFieldHarness>
          <Story />
        </ListFieldHarness>
      );
    },
  ],
  title: "Components/ListField",
} as Meta;

export const ListField = () => <ListFieldComponent />;
