import * as React from 'react'
import { forwardRef, useRef } from 'react'
import { SharedSx, ThemeUIStyleObject } from 'kodiak-ui'
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Input,
  InputGroup,
  Label,
  Listbox,
  ListboxItem,
  Overlay,
  SvgIcon,
  Tag,
  useOverlayPosition,
  VisuallyHidden,
} from '@kodiak-ui/primitives'
import {
  AutocompleteComponents,
  AutocompleteInputButtonProps,
  AutocompleteInputProps,
  AutocompleteOptionProps,
  AutocompleteProps,
} from './types'
import { useAutocomplete } from './useAutocomplete'

export function useAutocompleteStyles(
  styles: { [K in AutocompleteComponents]?: ThemeUIStyleObject },
) {
  return styles
}

export const Autocomplete = forwardRef(function Autocomplete(
  {
    label,
    placeholder,
    placement,
    offset,
    renderInput: renderInputProp,
    renderOption: renderOptionProp,
    styles,
    ...props
  }: AutocompleteProps,
  ref,
) {
  const tagStyles = {
    root: { m: '2px', ...styles?.tag },
    button: styles?.tagButton,
  }

  const triggerRef = useRef<HTMLElement>()
  const overlayRef = useRef<HTMLDivElement>()

  const { isMulti } = props

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
    getTagProps,
  } = useAutocomplete({
    ...props,
  })

  useOverlayPosition(
    { isVisible: isOpen, placement, offset },
    triggerRef,
    overlayRef,
  )

  const hasValue = isMulti ? value?.length > 0 : value

  const defaultRenderTags = () =>
    isMulti && value?.length > 0
      ? (value as string[])?.map((item, index) => (
          <Tag
            isDismissible
            key={item}
            styles={tagStyles}
            data-testid={`autocomplete-tag-value-${index}`}
            {...getTagProps({ index })}
          >
            {item}
          </Tag>
        ))
      : null

  const defaultRenderInput = (
    inputProps: AutocompleteInputProps,
    clearButtonProps: AutocompleteInputButtonProps,
    popoverButtonProps: AutocompleteInputButtonProps,
  ) => (
    <InputGroup
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        pl: '2px',
        pr: '56px',
        ...styles?.inputGroup,
      }}
    >
      {defaultRenderTags()}
      <Input
        type="text"
        variant="shadow"
        placeholder={placeholder}
        {...inputProps}
        sx={{
          px: 1,
          py: '2px',
          width: 0,
          minWidth: '30px',
          flexGrow: 1,
          textOverflow: 'ellipsis',
          ...styles?.input,
        }}
      />
      <Flex
        sx={{
          alignItems: 'center',
          position: 'absolute',
          right: 0,
          pr: 1,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <SharedSx
          sx={{
            p: 1,
          }}
        >
          {hasValue ? (
            <CloseButton {...clearButtonProps} sx={styles?.button}>
              Clear selection
            </CloseButton>
          ) : null}
          <Button
            variants="shadow"
            {...popoverButtonProps}
            sx={{
              height: '20px',
              p: 0,
              transition: 'transform 0.2s ease-in-out',
              transform: isOpen ? 'rotate(-0.5turn)' : null,
              ...styles?.button,
            }}
          >
            <SvgIcon height="20" viewBox="0 0 24 24" width="20">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </SvgIcon>
            <VisuallyHidden>Toggle the list of options</VisuallyHidden>
          </Button>
        </SharedSx>
      </Flex>
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
        ...styles?.listboxItem,
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

  function renderOptions() {
    return options?.length > 0 ? (
      options?.map((option, index) => {
        return renderOption(option, index)
      })
    ) : (
      <ListboxItem sx={styles?.listboxItem}>No results</ListboxItem>
    )
  }

  return (
    <>
      <Box ref={ref} {...getRootProps()} sx={styles?.root}>
        <Label {...getLabelProps()} sx={styles?.label}>
          {label}
        </Label>
        <Box ref={triggerRef}>{renderInput()}</Box>
      </Box>
      {isOpen ? (
        <Overlay ref={overlayRef}>
          <Listbox
            {...getListboxProps()}
            sx={{
              bg: 'background',
              maxHeight: '300px',
              minWidth: '250px',
              overflow: 'scroll',
              zIndex: 100,
              ...styles?.listbox,
            }}
          >
            {renderOptions()}
          </Listbox>
        </Overlay>
      ) : null}
    </>
  )
})
