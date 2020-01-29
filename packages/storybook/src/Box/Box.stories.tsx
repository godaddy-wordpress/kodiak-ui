import * as React from 'react'
import { Box } from '@kodiak/box'

export default {
  title: 'Box',
  component: Box,
  parameters: {
    componentSubTitle: 'Base primitive component for all Kodiak components',
  },
}

export function initial() {
  return (
    <Box
      marginTop={7}
      sx={{
        fontFamily: 'body',
        fontWeight: 'bold',
        padding: 5,
      }}
    >
      Basic Box that renders a Div
    </Box>
  )
}

export function withComponent() {
  return (
    <Box
      as="main"
      sx={{
        fontFamily: 'body',
        fontWeight: 'bold',
        padding: 5,
      }}
    >
      Renders the Box as a Main HTML element
    </Box>
  )
}
