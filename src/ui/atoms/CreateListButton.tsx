import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

type CreateListButtonInput = {
  onClick: () => void;
};

const CreateListButton = ({ onClick }: CreateListButtonInput) => {
  return (
    <IconButton
      aria-label="Create a new list"
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      icon={<AddIcon />}
      onClick={onClick}
    />
  );
};

export { CreateListButton };
