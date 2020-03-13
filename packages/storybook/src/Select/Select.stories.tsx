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
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<string>({ items, initialSelectedItem })

  return (
    <Select>
      <VisuallyHidden>
        <SelectLabel {...getLabelProps()}>Choose a filter:</SelectLabel>
      </VisuallyHidden>
      <SelectButton {...getToggleButtonProps()}>
        {selectedItem || 'Filter'}
      </SelectButton>
      <SelectMenu {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <SelectMenuItem
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              sx={{
                bg: highlightedIndex === index ? 'highlight' : 'inherit',
              }}
            >
              {item}
            </SelectMenuItem>
          ))}
      </SelectMenu>
    </Select>
  )
}
