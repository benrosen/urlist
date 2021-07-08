import Amplify, { Auth } from "aws-amplify";
import { MemoryRouter, Route } from "react-router-dom";

import { ListHarnessProps } from "./List.harness.props";
import React from "react";
import { Switch } from "@chakra-ui/react";
import awsExports from "aws-exports";

Amplify.configure(awsExports);
Auth.currentCredentials();

export const ListHarness = ({ children }: ListHarnessProps): JSX.Element => {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/:list?">{children}</Route>
      </Switch>
    </MemoryRouter>
  );
};
