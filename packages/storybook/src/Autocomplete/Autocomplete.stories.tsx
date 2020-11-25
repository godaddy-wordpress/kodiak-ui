import * as React from 'react'
import { useAutocomplete } from '@kodiak-ui/autocomplete'
import {
  Button,
  Input,
  InputGroup,
  Label,
  Listbox,
  ListboxItem,
} from '@kodiak-ui/primitives'

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
    value,
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
        <Label {...getLabelProps()}>Autocomplete</Label>
        <InputGroup>
          <Input type="text" variant="shadow" {...getInputProps()} />
          {value ? <Button {...getClearButtonProps()}>Clear</Button> : null}
          <Button {...getPopoverButtonProps()}>Popover</Button>
        </InputGroup>
      </div>
      {isOpen ? (
        <Listbox
          {...getListboxProps()}
          sx={{ border: '1px solid', borderColor: 'red' }}
        >
          {options?.map((option, index) => (
            <ListboxItem
              key={index}
              {...getOptionProps({ index, option })}
              sx={{
                '&[data-option-selected]': {
                  bg: 'primary',
                  color: 'white',
                },
                '&[data-option-highlighted]': {
                  bg: 'muted',
                  color: 'text',
                },
              }}
            >
              {option}
            </ListboxItem>
          ))}
        </Listbox>
      ) : null}
    </>
  )
}
