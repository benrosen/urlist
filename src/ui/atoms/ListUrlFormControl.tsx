import React, { MutableRefObject } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Field } from "formik";

type ListUrlFormControlInput = { focusRef: MutableRefObject<any>; id: string };

const ListUrlFormControl = ({ focusRef, id }: ListUrlFormControlInput) => {
  return (
    <Field
      name={id}
      validate={(value) => {
        // TODO validate
      }}
    >
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors.url && form.touched.url}
            isRequired
            mb={4}
          >
            <FormLabel htmlFor={id}>URL</FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon children="urlist.click/" />
              <Input
                {...field}
                id={id}
                ref={focusRef}
                type="text"
                variant="filled"
              />
            </InputGroup>
            <FormErrorMessage>{form.errors.url}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export { ListUrlFormControl };
