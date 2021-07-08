import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";
import { Field } from "formik";

type ListDescriptionFormControlInput = { id: string };

const ListDescriptionFormControl = ({
  id,
}: ListDescriptionFormControlInput): JSX.Element => {
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
            <FormLabel htmlFor={id}>Description</FormLabel>
            <Textarea
              id={id}
              {...field}
              size="sm"
              type="text"
              variant="filled"
            />
          </FormControl>
        );
      }}
    </Field>
  );
};

export { ListDescriptionFormControl };
