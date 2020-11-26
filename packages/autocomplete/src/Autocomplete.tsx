import * as React from 'react'
import { forwardRef, useRef, ReactNode } from 'react'
import { useAutocomplete, UseAutocompleteProps } from './useAutocomplete'
import {
  Button,
  Input,
  InputGroup,
  Label,
  Listbox,
  ListboxItem,
  Overlay,
  useOverlayPosition,
} from '@kodiak-ui/primitives'

export type AutocompleteProps = {
  renderInput?: () => ReactNode
  renderOption?: (props, option, index) => ReactNode
} & UseAutocompleteProps

export const Autocomplete = forwardRef(function Autocomplete(
  {
    renderInput: renderInputProp,
    renderOption: renderOptionProp,
    ...props
  }: AutocompleteProps,
  ref,
) {
  const triggerRef = useRef()
  const overlayRef = useRef()

  const defaultRenderOption = (props, option, index) => (
    <ListboxItem
      key={index}
      {...props}
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
  )

  const renderOption = (option, index) => {
    const optionProps = getOptionProps({ index, option })

    return (
      renderOptionProp(optionProps, option, index) ||
      defaultRenderOption(optionProps, option, index)
    )
  }

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
    ...props,
  })

  useOverlayPosition({ isVisible: isOpen }, triggerRef, overlayRef)

  return (
    <>
      <div ref={triggerRef} {...getRootProps()}>
        <Label {...getLabelProps()}>Autocomplete</Label>
        <InputGroup>
          <Input type="text" variant="shadow" {...getInputProps()} />
          {value ? <Button {...getClearButtonProps()}>Clear</Button> : null}
          <Button {...getPopoverButtonProps()}>Popover</Button>
        </InputGroup>
      </div>
      {isOpen ? (
        <Overlay ref={overlayRef}>
          <Listbox
            {...getListboxProps()}
            sx={{
              border: '1px solid',
              borderColor: 'red',
              maxHeight: '300px',
              minWidth: '250px',
              overflow: 'scroll',
            }}
          >
            {options?.map((option, index) => {
              return renderOption(option, index)
            })}
          </Listbox>
        </Overlay>
      ) : null}
    </>
  )
})
