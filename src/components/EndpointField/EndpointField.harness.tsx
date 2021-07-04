import { EndpointFieldHarnessProps } from "./EndpointField.harness.props";
import { FieldHarness } from "components/Field";
import React from "react";

export const EndpointFieldHarness = ({
  children,
}: EndpointFieldHarnessProps): JSX.Element => {
  return (
    <FieldHarness initialValues={{ endpoint: "" }} onSubmit={() => {}}>
      {children}
    </FieldHarness>
  );
};
