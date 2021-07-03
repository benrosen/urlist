import { AddIcon } from "@chakra-ui/icons";
import { CreateButtonProps } from "./CreateButton.props";
import { DisclosureContext } from "contexts/DisclosureContext";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";

/**
 * The CreateButton component initiates the "create a new list" flow when clicked.
 */
export const CreateButton = (props: CreateButtonProps): JSX.Element => {
  const disclosureContext = useContext(DisclosureContext);
  return (
    <IconButton
      aria-label="Create a new list"
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      icon={<AddIcon />}
      onClick={() => {
        disclosureContext?.onOpen();
      }}
    />
  );
};
