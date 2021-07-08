import Field from "components/Field";
import { LinksFieldProps } from "./LinksField.props";
import React from "react";
import { Textarea } from "@chakra-ui/react";

/**
 * The LinksField component is a {@link Field} component that displays as a textarea.
 *
 * @todo validate list field
 */
export const LinksField = (props: LinksFieldProps): JSX.Element => {
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
