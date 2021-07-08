import ListComponent from "./index";
import { ListHarness } from "./List.harness";
import { Meta } from "@storybook/react";
import React from "react";

/** @todo solve: why doesn't story show up in storybook? */
export default {
  component: ListComponent,
  decorators: [
    (Story) => {
      return (
        <ListHarness>
          <Story />
        </ListHarness>
      );
    },
  ],
  title: "Components/List",
} as Meta;

export const List = () => <ListComponent />;
