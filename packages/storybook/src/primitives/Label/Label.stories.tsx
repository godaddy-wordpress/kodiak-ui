import * as React from 'react'
import { Box, Label, Flex, Input } from '@kodiak-ui/primitives'
import { component, variant } from 'kodiak-ui'

export default { title: 'Forms/Label', component: Label }

component('label', {
  mb: 1,
})

variant('inline', {
  mr: 1,
})

variant('inlineInput', {
  display: 'inline-block',
  width: 'auto',
})

export function Initial() {
  return (
    <Box sx={{ p: 4 }}>
      <Label htmlFor="input">Renders a `label` tag by default</Label>
      <Input id="input" placeholder="Start typing..." />
    </Box>
  )
}

export function InlineLabel() {
  return (
    <Box>
      <Label variants="inline" htmlFor="inline">
        Inline input &amp; label
      </Label>
      <Input id="inline" variants="inlineInput" placeholder="Inline input" />
    </Box>
  )
}
