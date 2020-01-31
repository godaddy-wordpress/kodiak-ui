import * as React from 'react'
import { Box, Label } from '@kodiak/primitives'

export default { title: 'Form/Label' }

export function initial() {
  return (
    <Box>
      <Label>Renders a `label` tag by default</Label>
    </Box>
  )
}

export function styledSystemProps() {
  return (
    <Box>
      <Label color="primary" htmlFor="input">
        Email:
      </Label>
      <input id="input" />
    </Box>
  )
}

export function nestedInput() {
  return (
    <Box>
      <Label color="primary">
        Email:
        <input></input>
      </Label>
    </Box>
  )
}
