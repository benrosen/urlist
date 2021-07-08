import { Flex } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";
import { PageFooter } from "../organisms/PageFooter";
import { PageHeader } from "../organisms/PageHeader";
import React from "react";

type IPageTemplateInput = PropsWithChildren<{}>;

const PageTemplate = ({ children }: IPageTemplateInput): JSX.Element => {
  return (
    <Flex direction="column">
      <PageHeader title="urlist."></PageHeader>
      {children}
      <PageFooter></PageFooter>
    </Flex>
  );
};

export { PageTemplate };
