import { ChakraProvider, theme } from '@chakra-ui/react'

import React from "react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]