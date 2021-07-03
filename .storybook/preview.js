import { ChakraProvider, theme } from '@chakra-ui/react'

import DisclosureProvider from "components/DisclosureProvider"
import React from "react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <DisclosureProvider>
      <StoryFn />
      </DisclosureProvider>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]