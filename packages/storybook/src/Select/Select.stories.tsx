import * as React from 'react'
import {
  Select,
  SelectLabel,
  SelectButton,
  SelectMenu,
  SelectMenuItem,
  useSelect,
} from '@kodiak-ui/select'
import { VisuallyHidden } from '@kodiak-ui/primitives'

const items = ['Layouts', 'Pre-built', 'All']
const initialSelectedItem = 'All'

export default { title: 'Select' }

export function Initial() {
  const { current, handleMouseDown } = useSelect({})
  console.log(current)

  return (
    <Select>
      <VisuallyHidden>
        <SelectLabel>Choose a filter:</SelectLabel>
      </VisuallyHidden>
      <SelectButton isOpen={false} onClick={handleMouseDown}>
        {'Filter'}
      </SelectButton>
    </Select>
  )
}
