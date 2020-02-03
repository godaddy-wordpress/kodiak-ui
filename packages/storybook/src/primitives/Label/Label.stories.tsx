import * as React from 'react'
import { Box, Label, Flex, Input } from '@kodiak/primitives'

export default { title: 'Forms/Label' }

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
      <Input id="input" />
    </Flex>
  )
}

export function horizontalLabel() {
  return (
    <Flex p={4} alignItems="center">
      <Label mr="2" htmlFor="horizontalInput">
        Email
      </Label>
      <Input id="horizontalInput" />
    </Flex>
  )
}
