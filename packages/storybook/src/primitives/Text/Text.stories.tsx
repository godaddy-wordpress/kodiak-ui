import * as React from 'react'
import { Box, Text } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Text', component: Text }

export function Initial() {
  return (
    <Box>
      <Text>Renders a `p` tag by default</Text>
    </Box>
  )
}

export function AsProp() {
  return (
    <Box as="span">
      <Text as="span">Renders the Text component as a `span` HTML element</Text>
    </Box>
  )
}

export function Variant() {
  return (
    <Box>
      <Text as="h1" variant="text.heading">
        Renders text in `h1` with the heading variant
      </Text>
    </Box>
  )
}
