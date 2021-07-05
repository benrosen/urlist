import PageComponent from "./index";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: PageComponent,
  title: "Components/Page",
} as Meta;

export const Page = () => <PageComponent />