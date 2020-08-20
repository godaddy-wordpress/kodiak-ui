import * as React from 'react'
import { Box, Text } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Text', component: Text }

export function initial() {
  return (
    <Box>
      <Text>Renders a `p` tag by default</Text>
    </Box>
  )
}

export function asProp() {
  return (
    <Box as="span">
      <Text as="span">Renders the Text component as a `span` HTML element</Text>
    </Box>
  )
}

export function styledSystemProps() {
  return (
    <Box>
      <Text color="primary" fontWeight="bold" fontSize={24} m={4}>
        Renders the Text and styles it with styled-system props
      </Text>
    </Box>
  )
}

export function variant() {
  return (
    <Box>
      <Text as="h1" variant="text.heading">
        Renders text in `h1` with the heading variant
      </Text>
    </Box>
  )
}
