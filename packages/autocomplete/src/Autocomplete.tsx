import * as React from 'react'
import { forwardRef, useRef } from 'react'
import { SharedSx } from 'kodiak-ui'
import {
  Box,
  Button,
  CloseButton,
  Input,
  InputGroup,
  Label,
  Listbox,
  ListboxItem,
  Overlay,
  SvgIcon,
  useOverlayPosition,
  VisuallyHidden,
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

  const defaultRenderInput = (
    inputProps: AutocompleteInputProps,
    clearButtonProps: AutocompleteInputButtonProps,
    popoverButtonProps: AutocompleteInputButtonProps,
  ) => (
    <InputGroup sx={{ alignItems: 'center', pr: 2 }}>
      <Input type="text" variant="shadow" {...inputProps} />
      <SharedSx sx={{ p: 1 }}>
        {value ? (
          <CloseButton {...clearButtonProps}>Clear selection</CloseButton>
        ) : null}
        <Button
          variants="shadow"
          {...popoverButtonProps}
          sx={{
            transition: 'transform 0.2s ease-in-out',
            transform: isOpen ? 'rotate(-0.5turn)' : null,
          }}
        >
          <SvgIcon height="20" viewBox="0 0 24 24" width="20">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </SvgIcon>
          <VisuallyHidden>Toggle the list of options</VisuallyHidden>
        </Button>
      </SharedSx>
    </InputGroup>
  )

  function renderInput() {
    const inputProps = getInputProps()
    const clearButtonProps = getClearButtonProps()
    const popoverButtonProps = getPopoverButtonProps()

    return (
      renderInputProp?.(inputProps, clearButtonProps, popoverButtonProps) ||
      defaultRenderInput(inputProps, clearButtonProps, popoverButtonProps)
    )
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

  return (
    <>
      <Box ref={ref} {...getRootProps()}>
        <Label {...getLabelProps()}>Autocomplete</Label>
        <Box ref={triggerRef}>{renderInput()}</Box>
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
