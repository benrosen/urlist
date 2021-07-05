import Field from "components/Field";
import { Input } from "@chakra-ui/react";
import React from "react";
import { TitleFieldProps } from "./TitleField.props";

/**
 * The TitleField component is a {@link Field} component that displays an input.
 *
 * @todo validate title field
 */
export const TitleField = (props: TitleFieldProps): JSX.Element => {
  return (
    <Field
      as={Input}
      id="title"
      label="Title"
      onValidate={(value) => {
        //
      }}
    />
  );
};
