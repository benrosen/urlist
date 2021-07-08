import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { ColorModeSwitcher } from "ui/atoms/ColorModeSwitcher";
import React from "react";
import { CreateListButton } from "ui/atoms/CreateListButton";
import { useDisclosure } from "@chakra-ui/react";
import { Fragment } from "react";
import { CreateListDrawer } from "./CreateListDrawer";

type PageHeaderInput = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderInput): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Flex p="4">
        <Center pl={2}>
          <Heading>{title}</Heading>
        </Center>
        <Spacer></Spacer>
        <Box>
          <CreateListButton onClick={onOpen} />
          <ColorModeSwitcher mr="4" />
        </Box>
      </Flex>
      <CreateListDrawer
        headerContent="Create ur list"
        isDrawerOpen={isOpen}
        onCloseDrawer={onClose}
      />
    </Fragment>
  );
};

export { PageHeader };
