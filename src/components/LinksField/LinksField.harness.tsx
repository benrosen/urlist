import { FieldHarness } from "components/Field";
import { LinksFieldHarnessProps } from "./LinksField.harness.props";
import React from "react";

export const LinksFieldHarness = ({
  children,
}: LinksFieldHarnessProps): JSX.Element => {
  return (
    <FieldHarness initialValues={{ items: "" }} onSubmit={() => {}}>
      {children}
    </FieldHarness>
  );
};
