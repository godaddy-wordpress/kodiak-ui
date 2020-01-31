import * as React from 'react'
import { Box } from '@kodiak/primitives'

export default { title: 'Box' }

export function initial() {
  return (
    <Box
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

export function asProp() {
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

export function styledSystemProps() {
  return (
    <Box m={3} p={5} bg="primary" color="white">
      Renders the Box and styles it with styled-system props
    </Box>
  )
}
