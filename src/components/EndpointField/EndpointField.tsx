import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { EndpointFieldProps } from "./EndpointField.props";
import Field from "components/Field";
import React from "react";

/**
 * The EndpointField component is a {@link Field} component that displays an input.
 *
 * @todo validate endpoint field
 */
export const EndpointField = ({ ref }: EndpointFieldProps): JSX.Element => {
  return (
    <Field
      as={(props) => {
        return (
          <InputGroup size={props.size}>
            <InputLeftAddon children="urlist.click/" />
            <Input {...props} ref={ref} />
          </InputGroup>
        );
      }}
      id="endpoint"
      label="URL"
      onValidate={(value) => {
        //
      }}
    />
  );
};
