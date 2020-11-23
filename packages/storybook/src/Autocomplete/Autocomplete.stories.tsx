import * as React from 'react'
import { useAutocomplete } from '@kodiak-ui/autocomplete'

export default { title: 'Autocomplete' }

const options = ['Option 1', 'Option 2']

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
        <label {...getLabelProps()}>Autocomplete</label>
        <input type="text" {...getInputProps()} />
      </div>
      {isOpen ? (
        <ul {...getListboxProps()}>
          {options?.map((option, index) => (
            <li key={index} {...getOptionProps({ index, option })}>
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
