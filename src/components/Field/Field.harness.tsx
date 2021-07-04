import { Form, Formik } from "formik";

import { FieldHarnessProps } from "./Field.harness.props";
import React from "react";

export const FieldHarness = ({
  children,
  initialValues,
  onSubmit,
}: FieldHarnessProps): JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
