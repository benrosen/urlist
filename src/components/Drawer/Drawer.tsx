import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useContext, useRef } from "react";

import DescriptionField from "components/DescriptionField";
import { DisclosureContext } from "components/DisclosureProvider";
import EndpointField from "components/EndpointField";
import { Fragment } from "react";
import LinksField from "components/LinksField";
import SubmitButton from "components/SubmitButton";
import TitleField from "components/TitleField";

/**
 * The Drawer component displays a form with fields for creating a new list.
 *
 * @todo submit form data to API
 */
export const Drawer = (): JSX.Element => {
  const disclosureContext = useContext(DisclosureContext);
  const formId = "create-list-form";
  const initialFocusRef = useRef<any>();
  return (
    <ChakraDrawer
      initialFocusRef={initialFocusRef}
      isOpen={disclosureContext?.isOpen}
      onClose={disclosureContext?.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            //
          }}
        >
          {(props) => {
            return (
              <Fragment>
                <DrawerCloseButton />
                <DrawerHeader>Create ur list</DrawerHeader>
                <DrawerBody>
                  <Form id={formId}>
                    <EndpointField ref={initialFocusRef} />
                    <TitleField />
                    <DescriptionField />
                    <LinksField />
                  </Form>
                </DrawerBody>
                <DrawerFooter>
                  <SubmitButton formId={formId} />
                </DrawerFooter>
              </Fragment>
            );
          }}
        </Formik>
      </DrawerContent>
    </ChakraDrawer>
  );
};
