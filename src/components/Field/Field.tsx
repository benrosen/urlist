import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { FormErrorMessage, FormHelperText } from "@chakra-ui/react";

import { FieldProps } from "./Field.props";
import { Field as FormikField } from "formik";
import React from "react";

/**
 * The Field component validates a form control.
 */
export const Field = ({
  as: Alias,
  helperText,
  id,
  isRequired,
  label,
  onValidate,
}: FieldProps): JSX.Element => {
  return (
    <FormikField name={id} validate={onValidate}>
      {({ field, form }: { field: any; form: any }) => {
        return (
          <FormControl
            isInvalid={form.errors.items && form.touched.items}
            isRequired={isRequired}
            mb={2}
          >
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Alias {...field} id={id} size="sm" type="text" variant="filled" />
            <FormErrorMessage>{form.errors.url}</FormErrorMessage>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        );
      }}
    </FormikField>
  );
};
