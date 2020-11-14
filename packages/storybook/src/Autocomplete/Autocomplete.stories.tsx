import * as React from 'react'
import { useAutocomplete } from '@kodiak-ui/autocomplete'

export default { title: 'Autocomplete' }

export function SingleValue() {
  const {
    isOpen,
    getRootProps,
    getInputProps,
    getListboxProps,
  } = useAutocomplete({
    options: ['Option 1', 'Option 2'],
  })

  return (
    <>
      <div {...getRootProps()}>
        <input type="text" {...getInputProps()} />
      </div>
      {isOpen ? <div {...getListboxProps()}>Listbox</div> : null}
    </>
  )
}
