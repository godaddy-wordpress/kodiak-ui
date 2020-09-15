import * as React from 'react'
import { Box, Label, Flex, Input } from '@kodiak-ui/primitives'

export default { title: 'Forms/Label', component: Label }

export function initial() {
  return (
    <Box sx={{ p: 4 }}>
      <Label>Renders a `label` tag by default</Label>
    </Box>
  )
}

export function verticalLabel() {
  return (
    <Flex sx={{ flexDirection: 'column', p: 4 }}>
      <Label sx={{ mb: 2 }} htmlFor="input">
        Email
      </Label>
      <Input id="input" />
    </Flex>
  )
}

export function inlineLabel() {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Flex sx={{ alignItems: 'center', p: 4 }}>
        <Box sx={{ width: 1 / 8 }}>
          <Label variant="inline" htmlFor="email">
            Email
          </Label>
        </Box>
        <Box sx={{ width: 7 / 8 }}>
          <Input id="email" variant="inline" />
        </Box>
      </Flex>
      <Flex sx={{ p: 4, alignItems: 'center' }}>
        <Box sx={{ width: 1 / 8 }}>
          <Label variant="inline" htmlFor="subject">
            Subject
          </Label>
        </Box>
        <Box sx={{ width: 7 / 8 }}>
          <Input id="subject" variant="inline" />
        </Box>
      </Flex>
    </Flex>
  )
}
