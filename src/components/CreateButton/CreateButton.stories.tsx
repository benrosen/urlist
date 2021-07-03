import CreateButtonComponent from "./index";
import { DisclosureContext } from "contexts/DisclosureContext";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: CreateButtonComponent,
  title: "Components/CreateButton",
} as Meta;

export const CreateButton = () => <CreateButtonComponent />;
