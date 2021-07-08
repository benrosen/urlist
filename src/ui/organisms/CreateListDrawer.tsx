import React, { useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  useToast,
} from "@chakra-ui/react";
import { CreateListForm } from "./CreateListForm";

type CreateListDrawerInput = {
  headerContent: string;
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
};

const CreateListDrawer = ({
  headerContent,
  isDrawerOpen,
  onCloseDrawer,
}: CreateListDrawerInput): JSX.Element => {
  const FORM_ID = "create-list-form";
  const initialFocusRef = useRef<any>();
  const toast = useToast();
  return (
    <Drawer
      initialFocusRef={initialFocusRef}
      isOpen={isDrawerOpen}
      onClose={onCloseDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{headerContent}</DrawerHeader>
        <DrawerBody>
          <CreateListForm
            formId={FORM_ID}
            initialFocusRef={initialFocusRef}
            onListCreated={(id) => {
              console.log(id);
              onCloseDrawer();
              const url = `https://urlist.click/${id}`;
              toast({
                title: "List created",
                description: <Link href={url}>{url}</Link>,
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }}
          />
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme="blue" type="submit" form={FORM_ID}>
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { CreateListDrawer };
