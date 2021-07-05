import DrawerComponent from "./index";
import { DrawerHarness } from "./Drawer.harness";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: DrawerComponent,
  decorators: [
    (Story) => {
      return (
        <DrawerHarness>
          <Story />
        </DrawerHarness>
      );
    },
  ],
  title: "Components/Drawer",
} as Meta;

export const Drawer = () => <DrawerComponent />;
