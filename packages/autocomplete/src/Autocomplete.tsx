import * as React from 'react'
import { forwardRef, useRef } from 'react'
import {
  Box,
  Button,
  Input,
  InputGroup,
  Label,
  Listbox,
  ListboxItem,
  Overlay,
  useOverlayPosition,
} from '@kodiak-ui/primitives'
import {
  AutocompleteInputButtonProps,
  AutocompleteInputProps,
  AutocompleteOptionProps,
  AutocompleteProps,
} from './types'
import { useAutocomplete } from './useAutocomplete'

export const Autocomplete = forwardRef(function Autocomplete(
  {
    isDisabled = false,
    placement,
    offset,
    renderInput: renderInputProp,
    renderOption: renderOptionProp,
    renderClearButton: renderClearButtonProp,
    renderPopoverButton: renderPopoverButtonProp,
    ...props
  }: AutocompleteProps,
  ref,
) {
  const triggerRef = useRef<HTMLElement>()
  const overlayRef = useRef<HTMLDivElement>()

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

  useOverlayPosition(
    { isVisible: isOpen, placement, offset },
    triggerRef,
    overlayRef,
  )

  const defaultRenderInput = (props: AutocompleteInputProps) => (
    <Input type="text" variant="shadow" {...props} />
  )

  function renderInput() {
    const inputProps = getInputProps()

    return renderInputProp?.(inputProps) || defaultRenderInput(inputProps)
  }

  const defaultRenderOption = (
    props: AutocompleteOptionProps,
    option: string,
    index: number,
  ) => (
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

  function renderOption(option: string, index: number) {
    const optionProps = getOptionProps({ index, option })

    return (
      renderOptionProp?.(optionProps, option, index) ||
      defaultRenderOption(optionProps, option, index)
    )
  }

  const defaultRenderClearButton = (props: AutocompleteInputButtonProps) => (
    <Button {...props}>Clear</Button>
  )

  function renderClearButton() {
    if (!value) {
      return
    }

    const clearButtonProps = getClearButtonProps()

    return (
      renderClearButtonProp?.(clearButtonProps) ||
      defaultRenderClearButton(clearButtonProps)
    )
  }

  const defaultRenderPopoverButton = (props: AutocompleteInputButtonProps) => (
    <Button {...props}>Popover</Button>
  )

  function renderPopoverButton() {
    const popoverButtonProps = getPopoverButtonProps()

    return (
      renderPopoverButtonProp?.(popoverButtonProps) ||
      defaultRenderPopoverButton(popoverButtonProps)
    )
  }

  return (
    <>
      <Box ref={ref} {...getRootProps()}>
        <Label {...getLabelProps()}>Autocomplete</Label>
        <InputGroup ref={triggerRef}>
          {renderInput()}
          {renderClearButton()}
          {renderPopoverButton()}
        </InputGroup>
      </Box>
      {isOpen ? (
        <Overlay ref={overlayRef}>
          <Listbox
            {...getListboxProps()}
            __base={{
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
