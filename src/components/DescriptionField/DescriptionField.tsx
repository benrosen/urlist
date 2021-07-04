import { DescriptionFieldProps } from "./DescriptionField.props";
import Field from "components/Field";
import React from "react";
import { Textarea } from "@chakra-ui/react";

/**
 * The DescriptionField component is a {@link Field} component that displays a textarea.
 *
 * @todo validate description field
 * @todo test DescriptionField
 * @todo DescriptionField stories
 */
export const DescriptionField = (props: DescriptionFieldProps): JSX.Element => {
  return (
    <Field
      as={Textarea}
      id="description"
      label="Description"
      onValidate={(value) => {
        //
      }}
    />
  );
};
