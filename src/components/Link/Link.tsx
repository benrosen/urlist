import { Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

import CopyButton from "components/CopyButton";
import { LinkProps } from "./Link.props";
import React from "react";

/**
 * The Link component renders the link title and a button to copy the URL to the clipboard.
 * If no link title is available, the URL will be displayed instead.
 */
export const Link = (props: LinkProps): JSX.Element => {
  return (
    <Flex borderRadius="md" borderWidth="1px" p={2} role="listitem" shadow="md">
      <Center pl={2}>
        <Text as="u" isTruncated maxWidth="250">
          <a href={props.url}>{props.title ?? props.url}</a>
        </Text>
      </Center>
      <Spacer></Spacer>
      <HStack>
        <CopyButton value={props.url} />
      </HStack>
    </Flex>
  );
};
