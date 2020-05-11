import * as React from 'react'
import {
  Select,
  SelectLabel,
  SelectButton,
  SelectMenu,
  SelectMenuItem,
  useSelect,
} from '@kodiak-ui/select'
import { VisuallyHidden, Button, Flex } from '@kodiak-ui/primitives'

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
      <SelectButton isOpen={isOpen} {...getToggleButtonProps()}>
        {selectedItem || 'Filter'}
      </SelectButton>
      {isOpen && (
        <SelectMenu variant="selectMenu" {...getMenuProps()}>
          {items.map((item, index) => (
            <SelectMenuItem
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              sx={{
                bg: highlightedIndex === index ? 'primary' : 'inherit',
                color: highlightedIndex === index ? 'white' : 'inherit',
              }}
            >
              {item}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
    </Select>
  )
}

export function Loading() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<string>({ items })
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  return (
    <Flex>
      <Select sx={{ mr: 2 }}>
        <SelectButton
          isOpen={isOpen}
          isLoading={isLoading}
          {...getToggleButtonProps()}
         >
          {selectedItem || 'Filter'}
        </SelectButton>
        {isOpen && (
          <SelectMenu variant="selectMenu" {...getMenuProps()}>
            {items.map((item, index) => (
              <SelectMenuItem
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
                sx={{
                  bg: highlightedIndex === index ? 'primary' : 'inherit',
                  color: highlightedIndex === index ? 'white' : 'inherit',
                }}
              >
                {item}
              </SelectMenuItem>
            ))}
          </SelectMenu>
        )}
      </Select>
      <Button onClick={() => setIsLoading(false)}>
        Done loading
      </Button>
    </Flex>
  )
}
