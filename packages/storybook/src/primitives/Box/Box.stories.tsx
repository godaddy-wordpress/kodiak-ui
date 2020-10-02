import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Box', component: Box }

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
