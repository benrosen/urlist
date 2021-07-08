import { Heading, Text } from "@chakra-ui/layout";

import { ListItem } from "ui/molecules/ListItem";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { useList } from "hooks/useList";

type ListInput = { listId: string };

const ListView = ({ listId }: ListInput): JSX.Element => {
  const list = useList(listId);
  return (
    <VStack p="4" spacing={8} maxW="500">
      <Heading as="h1" size="4xl" w="100%">
        {list?.title}
      </Heading>
      <VStack spacing={8} w="100%">
        <Text w="100%">{list?.description}</Text>
        <VStack align="stretch" pl="8" w="100%" spacing={4}>
          {list?.links.map(({ id, title, url }) => {
            return <ListItem key={id} title={title} url={url} />;
          })}
        </VStack>
      </VStack>
    </VStack>
  );
};

export { ListView };
