import { FieldHarness } from "components/Field";
import { ListFieldHarnessProps } from "./ListField.harness.props";
import React from "react";

export const ListFieldHarness = ({
  children,
}: ListFieldHarnessProps): JSX.Element => {
  return (
    <FieldHarness initialValues={{ items: "" }} onSubmit={() => {}}>
      {children}
    </FieldHarness>
  );
};
