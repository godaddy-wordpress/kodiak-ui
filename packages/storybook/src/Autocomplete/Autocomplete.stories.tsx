import * as React from 'react'
import { useAutocomplete } from '@kodiak-ui/autocomplete'
import { Input, Label, ListboxItem } from '@kodiak-ui/primitives'

export default { title: 'Autocomplete' }

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

export function SingleValue() {
  const {
    isOpen,
    getRootProps,
    getLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
  } = useAutocomplete({
    options,
  })

  return (
    <>
      <div {...getRootProps()}>
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
