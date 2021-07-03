import { Button } from "@chakra-ui/react";
import React from "react";
import { SubmitButtonProps } from "./SubmitButton.props";
import config from "./SubmitButton.config.json";

/**
 * The SubmitButton component submits a form.
 */
export const SubmitButton = ({ formId }: SubmitButtonProps): JSX.Element => {
  return (
    <Button colorScheme="blue" type="submit" form={formId}>
      {config.text}
    </Button>
  );
};
