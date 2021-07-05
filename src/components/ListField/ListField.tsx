import Field from "components/Field";
import React from "react";
import { Textarea } from "@chakra-ui/react";
import { ListFieldProps } from "./ListField.props";

/**
 * The ListField component is a {@link Field} component that displays as a textarea.
 *
 * @todo validate list field
 * @todo test ListField
 * @todo ListField stories
 */
export const ListField = (props: ListFieldProps): JSX.Element => {
  return (
    <Field
      as={() => {
        return <Textarea placeholder="[An example](https://example.com)" />;
      }}
      id="list"
      isRequired
      label="Items"
      onValidate={(value) => {
        //
      }}
    />
  );
};
