import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Home } from "ui/pages/home/Home"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home/>
  </ChakraProvider>
)
