import * as React from 'react'
import { Box, Label, Flex } from '@kodiak/primitives'

export default { title: 'Form/Label' }

export function initial() {
  return (
    <Box p={4}>
      <Label>Renders a `label` tag by default</Label>
    </Box>
  )
}

export function verticalLabel() {
  return (
    <Flex flexDirection="column" p={4}>
      <Label mb={2} htmlFor="input">
        Email
      </Label>
      <input id="input" />
    </Flex>
  )
}

export function horizontalLabel() {
  return (
    <Box p={4}>
      <Label mr="2" htmlFor="nestedInput">
        Email
      </Label>
      <input id="nestedInput"></input>
    </Box>
  )
}
