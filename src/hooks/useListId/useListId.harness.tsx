import { MemoryRouter, Route } from "react-router-dom";

import React from "react";
import { Switch } from "@chakra-ui/react";
import { UseListIdHarnessProps } from "./useListId.harness.props";

export const UseListIdHarness = ({
  children,
  location,
}: UseListIdHarnessProps): JSX.Element => {
  return (
    <MemoryRouter initialEntries={[location]}>
      <Switch>
        <Route path="/:listId?">{children}</Route>
      </Switch>
    </MemoryRouter>
  );
};
