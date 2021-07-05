import { FieldHarness } from "components/Field";
import React from "react";
import { TitleFieldHarnessProps } from "./TitleField.harness.props";

export const TitleFieldHarness = ({
  children,
}: TitleFieldHarnessProps): JSX.Element => {
  return (
    <FieldHarness initialValues={{ title: "" }} onSubmit={() => {}}>
      {children}
    </FieldHarness>
  );
};
