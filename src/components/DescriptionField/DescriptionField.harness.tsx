import { DescriptionFieldHarnessProps } from "./DescriptionField.harness.props";
import { FieldHarness } from "components/Field";
import React from "react";

export const DescriptionFieldHarness = ({
  children,
}: DescriptionFieldHarnessProps): JSX.Element => {
  return (
    <FieldHarness initialValues={{ description: "" }} onSubmit={() => {}}>
      {children}
    </FieldHarness>
  );
};
