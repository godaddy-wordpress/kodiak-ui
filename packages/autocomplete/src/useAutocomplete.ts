import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'
import { useHighlightIndex } from './useHighlightIndex'
import { useFilterOptions } from './useFilterOptions'
import {
  AutocompleteInputButtonProps,
  AutocompleteInputProps,
  AutocompleteLabelProps,
  AutocompleteListboxProps,
  AutocompleteOptionProps,
  AutocompleteRootProps,
  UseAutocompleteProps,
  InteractionEvent,
} from './types'

export function useAutocomplete({
  isOpen: isOpenProp,
  isClearable = true,
  isDisabled = false,
  isMulti = false,
  value: valueProp,
  inputValue: inputValueProp,
  componentName = 'useAutocomplete',
  defaultValue = null,
  openOnFocus = true,
  pageSize = 5,
  blurOnSelect = false,
  clearOnBlur = false,
  clearOnEscape = false,
  closeOnSelect = true,
  options,

  onCloseChange,
  onOpenChange,
  onValueChange,
  onInputValueChange,
  onHighlightedIndexChange,

  getOptionSelected = (option, value) => option === value,
  getOptionDisabled,
}: UseAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLElement>(null)
  const highlightedIndexRef = useRef<number>(-1)

  const uid = useId()
  const id = `kodiak-autocomplete-${uid}`

  const [isOpen, setIsOpen] = useControlled<boolean>({
    controlled: isOpenProp,
    default: false,
    name: componentName,
    state: 'open',
  })

  const [value, setValue] = useControlled<string | string[]>({
    controlled: valueProp,
    default: defaultValue,
    name: componentName,
    state: 'value',
  })

  const [inputValue, setInputValue] = useControlled<string>({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue',
  })

  const [isFocused, setIsFocused] = useState(false)
  const [isPristine, setIsPristine] = useState(false)

  const filteredOptions = useFilterOptions({
    isOpen,
    options,
    inputValue:
      !isMulti && value !== null && value === inputValue && isPristine
        ? ''
        : inputValue,
  })

  const setHighlightedIndex = useHighlightIndex(
    {
      id,
      isOpen,
      options: filteredOptions,
      onHighlightedIndexChange,
    },
    inputRef,
    listboxRef,
    highlightedIndexRef,
  )

  const isAvailable = isOpen && filteredOptions?.length > 0
  const isDirty =
    inputValue?.length > 0 || isMulti ? value?.length > 0 : value !== null
  const hasValue = isMulti ? value?.length > 0 : value

  const handleSyncHighlightedAndSelectedOption = useCallback(() => {
    if (!isOpen || !listboxRef?.current) {
      return
    }

    const valueItem = isMulti ? value?.[0] : value

    if (valueItem) {
      if (isMulti) {
        return
      }

      const valueIndex = filteredOptions?.findIndex(option =>
        getOptionSelected(option, valueItem),
      )

      if (valueIndex === -1) {
        setHighlightedIndex({ diff: 'reset' })
      } else {
        setHighlightedIndex({ index: valueIndex })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filteredOptions,
    getOptionSelected,
    isMulti,
    isOpen,
    setHighlightedIndex,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isMulti ? false : value,
  ])

  useEffect(() => {
    handleSyncHighlightedAndSelectedOption()
  }, [handleSyncHighlightedAndSelectedOption])

  const handleResetInputValue = useCallback(
    (event: InteractionEvent, newValue?: string) => {
      let newInputValue: string

      if (isMulti || newValue === null) {
        newInputValue = ''
      } else {
        newInputValue = newValue
      }

      setInputValue(newInputValue)
      onInputValueChange?.(event, newInputValue)
    },
    [isMulti, onInputValueChange, setInputValue],
  )

  const handleOnOpen = useCallback(
    event => {
      if (isOpen) {
        return
      }

      setIsOpen(true)
      setIsPristine(true)
      onOpenChange?.(event)
    },
    [isOpen, onOpenChange, setIsOpen],
  )

  const handleOnClose = useCallback(
    event => {
      if (!isOpen) {
        return
      }

      setIsOpen(false)
      onCloseChange?.(event)
    },
    [isOpen, onCloseChange, setIsOpen],
  )

  const handleToggle = useCallback(
    event => {
      if (isOpen) {
        handleOnClose(event)
      } else {
        handleOnOpen(event)
      }
    },
    [handleOnClose, handleOnOpen, isOpen],
  )

  const handleSetValue = useCallback(
    (event, newValue) => {
      if (value === newValue) {
        return
      }

      onValueChange?.(event, newValue)

      setValue(newValue)
    },
    [onValueChange, setValue, value],
  )

  const handleSetNewValue = useCallback(
    (event: InteractionEvent, option: string) => {
      let newValue: string | string[] = option

      if (isMulti) {
        newValue = Array.isArray(value) ? value.slice() : []

        const index = newValue?.findIndex(valueItem =>
          getOptionSelected(valueItem, option),
        )

        if (index === -1) {
          newValue.push(option as string)
        }
      }

      handleSetValue(event, newValue)
      handleResetInputValue(event, option as string)

      if (closeOnSelect) {
        handleOnClose(event)
      }

      if (blurOnSelect) {
        inputRef?.current?.blur()
      }
    },
    [
      blurOnSelect,
      closeOnSelect,
      getOptionSelected,
      handleOnClose,
      handleResetInputValue,
      handleSetValue,
      isMulti,
      value,
    ],
  )

  const handleOnClear = useCallback(
    (event: InteractionEvent) => {
      if (isClearable) {
        setInputValue('')
        onInputValueChange?.(event, '')

        handleSetValue(event, isMulti ? [] : null)
      }
    },
    [handleSetValue, isClearable, isMulti, onInputValueChange, setInputValue],
  )

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'PageUp':
          event.preventDefault()
          setHighlightedIndex({ diff: -pageSize, direction: 'previous' })
          handleOnOpen(event)
          break
        case 'PageDown':
          event.preventDefault()
          setHighlightedIndex({ diff: pageSize, direction: 'next' })
          handleOnOpen(event)
          break
        case 'ArrowDown':
          event.preventDefault()
          setHighlightedIndex({ diff: 1, direction: 'next' })
          handleOnOpen(event)
          break
        case 'ArrowUp':
          event.preventDefault()
          setHighlightedIndex({ diff: -1, direction: 'previous' })
          handleOnOpen(event)
          break
        case 'Escape':
          if (isOpen) {
            event.preventDefault()
            event.stopPropagation()

            if (clearOnEscape && (inputValue || hasValue)) {
              handleOnClear(event)
            }

            handleOnClose(event)
          }
          break
        case 'Enter':
          if (event.which === 229) {
            break
          }

          if (highlightedIndexRef?.current !== -1 && isOpen) {
            event.preventDefault()
            const option = filteredOptions?.[highlightedIndexRef?.current]
            handleSetNewValue(event, option)
          }
          break
        case 'Backspace':
          if (isMulti && inputValue === '' && hasValue) {
            const index = value?.length - 1
            const newValue: string[] = (value as string[])?.slice()

            newValue.splice(index, 1)

            handleSetValue(event, newValue)
          }
          break
        default:
      }
    },
    [
      clearOnEscape,
      filteredOptions,
      handleOnClear,
      handleOnClose,
      handleOnOpen,
      handleSetNewValue,
      handleSetValue,
      hasValue,
      inputValue,
      isMulti,
      isOpen,
      pageSize,
      setHighlightedIndex,
      value,
    ],
  )

  function handleOnClick() {
    // Always automatically focus on input when opening
    inputRef?.current?.focus()
  }

  const handleOptionOnClick = useCallback(
    (event: MouseEvent) => {
      const index = Number(
        event.currentTarget.getAttribute('data-option-index'),
      )

      handleSetNewValue(event, filteredOptions[index])
    },
    [filteredOptions, handleSetNewValue],
  )

  const handleOnFocus = useCallback(
    (event: FocusEvent) => {
      setIsFocused(true)

      if (openOnFocus) {
        handleOnOpen(event)
      }
    },
    [handleOnOpen, openOnFocus],
  )

  const handleOnBlur = useCallback(
    (event: FocusEvent) => {
      setIsFocused(false)

      if (clearOnBlur) {
        handleResetInputValue(event, null)
      }

      handleOnClose(event)
    },
    [clearOnBlur, handleOnClose, handleResetInputValue],
  )

  const handleOnMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event?.currentTarget?.getAttribute('id') !== id) {
        event.preventDefault()
      }
    },
    [id],
  )

  const handleInputOnMouseDown = useCallback(
    (event: MouseEvent) => {
      if (inputValue === '' || !isOpen) {
        handleToggle(event)
      }
    },
    [handleToggle, inputValue, isOpen],
  )

  function handleListboxOnMouseDown(event) {
    event.preventDefault()
  }

  const handleOptionOnMouseOver = useCallback(
    (event: MouseEvent) => {
      setHighlightedIndex({
        index: Number(event?.currentTarget?.getAttribute('data-option-index')),
      })
    },
    [setHighlightedIndex],
  )

  const handleInputOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event?.target?.value

      if (inputValue !== newValue) {
        setInputValue(newValue)
        setIsPristine(false)
        onInputValueChange?.(event, newValue)
      }

      if (newValue === '') {
        if (isClearable && !isMulti) {
          handleSetValue(event, null)
        }
      } else {
        handleOnOpen(event)
      }
    },
    [
      handleOnOpen,
      handleSetValue,
      inputValue,
      isClearable,
      isMulti,
      onInputValueChange,
      setInputValue,
    ],
  )

  const getRootProps = useCallback(
    (): AutocompleteRootProps => ({
      role: 'combobox',
      onClick: handleOnClick,
      onKeyDown: handleOnKeyDown,
      onMouseDown: handleOnMouseDown,

      'aria-owns': isAvailable ? `${id}-listbox` : null,
      'aria-expanded': isAvailable,
    }),
    [handleOnKeyDown, handleOnMouseDown, id, isAvailable],
  )

  const getLabelProps = useCallback(
    (): AutocompleteLabelProps => ({
      id: `${id}-label`,
      htmlFor: id,
    }),
    [id],
  )

  const getInputProps = useCallback(
    (): AutocompleteInputProps => ({
      id,
      ref: inputRef,
      value: inputValue,
      autoComplete: 'none',
      autoCapitalize: 'none',
      spellCheck: false,
      disabled: isDisabled,
      onFocus: handleOnFocus,
      onBlur: handleOnBlur,
      onChange: handleInputOnChange,
      onMouseDown: handleInputOnMouseDown,

      'aria-controls': isAvailable ? `${id}-listbox` : null,
      'aria-autocomplete': 'list' as 'list' | 'both',
      'aria-activedescendant': isOpen ? '' : null,
    }),
    [
      id,
      inputValue,
      isDisabled,
      handleOnFocus,
      handleOnBlur,
      handleInputOnChange,
      handleInputOnMouseDown,
      isAvailable,
      isOpen,
    ],
  )

  const getListboxProps = useCallback(
    (): AutocompleteListboxProps => ({
      id: `${id}-listbox`,
      ref: listboxRef as any,
      role: 'listbox',
      onMouseDown: handleListboxOnMouseDown,

      'aria-labelledby': `${id}-label`,
    }),
    [id],
  )

  const getOptionProps = useCallback(
    ({ index, option }): AutocompleteOptionProps => {
      const selected =
        value !== null && getOptionSelected<string>(option, value)
      const disabled = getOptionDisabled?.(option)

      return {
        key: index,
        id: `${id}-option-${index}`,
        role: 'option',
        tabIndex: -1,
        onClick: handleOptionOnClick,
        onMouseOver: handleOptionOnMouseOver,

        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected,
        ...(selected ? { 'data-option-selected': true } : null),
      }
    },
    [
      getOptionDisabled,
      getOptionSelected,
      handleOptionOnClick,
      handleOptionOnMouseOver,
      id,
      value,
    ],
  )

  const getClearButtonProps = useCallback(
    (): AutocompleteInputButtonProps => ({
      tabIndex: -1,
      onClick: handleOnClear,
    }),
    [handleOnClear],
  )

  const getPopoverButtonProps = useCallback(
    (): AutocompleteInputButtonProps => ({
      tabIndex: -1,
      disabled: isDisabled,
      onClick: handleToggle,
    }),
    [handleToggle, isDisabled],
  )

  return {
    isOpen,
    isAvailable,
    isDirty,
    isFocused,
    value,
    options: filteredOptions,
    getRootProps,
    getLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getClearButtonProps,
    getPopoverButtonProps,
  }
}
