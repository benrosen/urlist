import { Center } from "@chakra-ui/layout";
import { PageTemplate } from "../templates/PageTemplate";
import { ListView } from "../organisms/ListView";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ListPage = (): JSX.Element => {
  const location = useLocation();
  const [listId, setListId] = useState<string>("");
  useEffect(() => {
    setListId(() => {
      return location.pathname.substring(1);
    });
  }, [location]);
  return (
    <PageTemplate>
      <Center p="4">
        <ListView listId={listId} />
      </Center>
    </PageTemplate>
  );
};

export { ListPage };
