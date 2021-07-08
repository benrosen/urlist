import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "formik";

type ListItemsFormControlInput = { id: string };

const ListItemsFormControl = ({
  id,
}: ListItemsFormControlInput): JSX.Element => {
  return (
    <Field
      name={id}
      validate={() => {
        // TODO validate
      }}
    >
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors.items && form.touched.items}
            isRequired
            mb={2}
          >
            <FormLabel htmlFor={id}>Links</FormLabel>
            <Textarea
              {...field}
              id={id}
              placeholder="[An example](https://example.com)"
              size="sm"
              type="text"
              variant="filled"
            />
            <FormErrorMessage>{form.errors.url}</FormErrorMessage>
            <FormHelperText>
              One link per line. Use format: [name](url)
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

export { ListItemsFormControl };
