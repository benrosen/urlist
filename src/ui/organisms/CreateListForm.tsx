import React from "react";
import { MutableRefObject } from "react";
import { ListDescriptionFormControl } from "ui/atoms/ListDescriptionFormControl";
import { ListItemsFormControl } from "ui/atoms/ListItemsFormControl";
import { ListUrlFormControl } from "ui/atoms/ListUrlFormControl";
import { ListTitleFormControl } from "../atoms/ListTitleFormControl";
import { Form, Formik } from "formik";

type CreateListFormInput = {
  formId: string;
  initialFocusRef: MutableRefObject<any>;
  onListCreated: (id: string) => void;
};

const CreateListForm = ({
  formId,
  initialFocusRef,
  onListCreated,
}: CreateListFormInput): JSX.Element => {
  return (
    <Formik
      initialValues={{ description: "", items: "", title: "", url: "" }}
      onSubmit={(values, actions) => {
        // TODO lift Formik to CreateListDrawer and wrap Button
        // TODO style button isLoading = props.isSubmitting
        // TODO submit values to API
        // TODO call onListCreated with id of new list
        // TODO call onError and display error message
        const fakeListId = "test";
        onListCreated(fakeListId);
      }}
    >
      {(props) => {
        return (
          <Form id={formId}>
            <ListUrlFormControl focusRef={initialFocusRef} id="url" />
            <ListTitleFormControl id="title" />
            <ListDescriptionFormControl id="description" />
            <ListItemsFormControl id="items" />
          </Form>
        );
      }}
    </Formik>
  );
};

export { CreateListForm };
