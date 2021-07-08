import { Heading, Text } from "@chakra-ui/layout";

import Link from "components/Link";
import { ListProps } from "./List.props";
import { List as ListType } from "API";
import React from "react";
import { VStack } from "@chakra-ui/react";
import useListById from "hooks/useListById.ts";
import useListId from "hooks/useListId";

/**
 * The List component displays a title, a description, and links.
 *
 * @todo solve: there shouldn't be two different things called List (API.List, components/List)
 */
export const List = (props: ListProps): JSX.Element => {
  const id: string = useListId();
  const list: ListType = useListById({ id });
  return (
    <VStack maxW="500" p="4" role="main" spacing={8}>
      <Heading as="h1" size="4xl" w="100%">
        {list?.title}
      </Heading>
      <VStack spacing={8} w="100%">
        <Text w="100%">{list?.description}</Text>
        <VStack align="stretch" pl="8" role="list" spacing={4} w="100%">
          {list?.links.map(({ title, url }, index) => {
            return <Link key={index} title={title} url={url} />;
          })}
        </VStack>
      </VStack>
    </VStack>
  );
};
