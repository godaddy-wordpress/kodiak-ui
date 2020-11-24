import * as React from 'react'
import { useAutocomplete } from '@kodiak-ui/autocomplete'
import { Input, Label, ListboxItem } from '@kodiak-ui/primitives'

export default { title: 'Autocomplete' }

const defaultOptions = [
  'Afghanistan',
  'Bhutan',
  'Colombia',
  'Dominica',
  'Luxembourg',
  'Nauru',
  'Samoa',
]

export function SingleValue() {
  const {
    isOpen,
    options,
    getRootProps,
    getLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getClearButtonProps,
    getPopoverButtonProps,
  } = useAutocomplete({
    options: defaultOptions,
  })

  return (
    <>
      <div {...getRootProps()}>
        <button {...getClearButtonProps()}>Clear</button>
        <button {...getPopoverButtonProps()}>Popover</button>
        <Label {...getLabelProps()}>Autocomplete</Label>
        <Input type="text" {...getInputProps()} />
      </div>
      {isOpen ? (
        <ul {...getListboxProps()}>
          {options?.map((option, index) => (
            <ListboxItem
              key={index}
              {...getOptionProps({ index, option })}
              sx={{
                '&[data-option-selected]': {
                  bg: 'primary',
                },
                '&[data-option-highlighted]': {
                  bg: 'muted',
                },
              }}
            >
              {option}
            </ListboxItem>
          ))}
        </ul>
      ) : null}
    </>
  )
}
