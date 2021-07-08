import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Field } from "formik";

type ListTitleFormControlInput = { id: string };

const ListTitleFormControl = ({
  id,
}: ListTitleFormControlInput): JSX.Element => {
  return (
    <Field
      name={id}
      validate={(value) => {
        // TODO validate
      }}
    >
      {({ field, form }) => {
        return (
          <FormControl id={id} mb={4}>
            <FormLabel htmlFor={id}>Title</FormLabel>
            <Input {...field} id={id} size="sm" type="text" variant="filled" />
          </FormControl>
        );
      }}
    </Field>
  );
};

export { ListTitleFormControl };
