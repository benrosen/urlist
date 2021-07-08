import React from "react";
import { Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { CopyLinkToClipboardButton } from "ui/atoms/CopyLinkToClipboardButton";

type ListItemInput = { title?: string; url: string };

// TODO color link text
const ListItem = (input: ListItemInput): JSX.Element => {
  return (
    <Flex borderRadius="md" p={2} shadow="md" borderWidth="1px">
      <Center pl={2}>
        <Text as="u" isTruncated maxWidth="250">
          <a href={input.url}>{input.title ?? input.url}</a>
        </Text>
      </Center>
      <Spacer></Spacer>
      <HStack>
        <CopyLinkToClipboardButton duration={2500} url={input.url} />
      </HStack>
    </Flex>
  );
};

export { ListItem };
