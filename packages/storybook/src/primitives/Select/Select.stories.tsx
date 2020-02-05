import * as React from 'react'
import { Select, Box } from '@kodiak-ui/primitives'

export default { title: 'Forms/Select' }

export function initial() {
  return (
    <Box>
      <Select variant="select" defaultValue="hello">
        <option>Hello</option>
        <option>Hi</option>
        <option>Beep</option>
        <option>Boop</option>
      </Select>
    </Box>
  )
}
