import * as React from 'react'
import { Select, Box } from '@kodiak/primitives'

export default { title: 'Forms/Select' }

export function initial() {
  return (
    <Box>
      <Select defaultValue="hello">
        <option>Hello</option>
        <option>Hi</option>
        <option>Beep</option>
        <option>Boop</option>
      </Select>
    </Box>
  )
}
