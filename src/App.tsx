import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Page from "components/Page";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/:listId?">
          <Page />
        </Route>
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
