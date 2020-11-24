import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'
import { useHighlightIndex } from './useHighlightIndex'
import { useFilterOptions } from './useFilterOptions'

type InteractionEvent<T = HTMLInputElement> =
  | KeyboardEvent
  | MouseEvent
  | FocusEvent
  | ChangeEvent<T>

export type UseAutocompleteProps = {
  componentName?: string
  isOpen?: boolean
  value?: string[]
  inputValue?: string
  defaultValue?: string[]
  openOnFocus?: boolean
  pageSize?: number
  blurOnSelect?: boolean
  options: string[]

  // handlers
  onCloseChange?: (event: InteractionEvent) => void
  onOpenChange?: (event: InteractionEvent) => void
  onValueChange?: (event: InteractionEvent, value: string) => void
  onInputValueChange?: (event: InteractionEvent, value: string) => void
  onHighlightedIndexChange?: (option: string) => void

  // overwritable getters
  getOptionSelected?: <T>(option: T, value: T) => boolean
  getOptionDisabled?: <T>(option: T) => boolean
}

export function useAutocomplete({
  isOpen: isOpenProp,
  value: valueProp,
  inputValue: inputValueProp,
  componentName = 'useAutocomplete',
  defaultValue = null,
  openOnFocus = true,
  pageSize = 5,
  blurOnSelect = false,
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

  const [value, setValue] = useControlled<string[]>({
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
      value !== null && value.includes(inputValue) && isPristine
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
  const isDirty = inputValue?.length > 0

  const handleResetInputValue = useCallback(
    (event: InteractionEvent, newValue?: string) => {
      let newInputValue: string

      if (newValue === null) {
        newInputValue = ''
      } else {
        newInputValue = newValue
      }

      setInputValue(newInputValue)
      onInputValueChange?.(event, newInputValue)
    },
    [onInputValueChange, setInputValue],
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
    (event: InteractionEvent, option: string) => {
      setValue([option])
      onValueChange?.(event, option)
      handleResetInputValue(event, option)

      handleOnClose(event)

      if (blurOnSelect) {
        inputRef?.current?.blur()
      }
    },
    [
      blurOnSelect,
      handleOnClose,
      handleResetInputValue,
      onValueChange,
      setValue,
    ],
  )

  const handleOnClear = useCallback(
    (event: InteractionEvent) => {
      setInputValue('')
      onInputValueChange?.(event, '')

      handleSetValue(event, null)
    },
    [handleSetValue, onInputValueChange, setInputValue],
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
            handleSetValue(event, option)
          }
          break
        default:
      }
    },
    [
      filteredOptions,
      handleOnClose,
      handleOnOpen,
      handleSetValue,
      isOpen,
      pageSize,
      setHighlightedIndex,
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

      handleSetValue(event, filteredOptions[index])
    },
    [filteredOptions, handleSetValue],
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
      handleOnClose(event)
    },
    [handleOnClose],
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
        // handle clear
      } else {
        handleOnOpen(event)
      }
    },
    [handleOnOpen, inputValue, onInputValueChange, setInputValue],
  )

  const getRootProps = useCallback(
    () => ({
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
    () => ({
      id: `${id}-label`,
      htmlFor: id,
    }),
    [id],
  )

  const getInputProps = useCallback(
    () => ({
      id,
      ref: inputRef,
      value: inputValue,
      autoComplete: 'none',
      autoCapitalize: 'none',
      spellCheck: false,
      onFocus: handleOnFocus,
      onBlur: handleOnBlur,
      onChange: handleInputOnChange,
      onMouseDown: handleInputOnMouseDown,

      'aria-controls': isAvailable ? `${id}-listbox` : null,
      'aria-autocomplete': 'list' as 'list' | 'both',
      'aria-activedescendant': isOpen ? '' : null,
    }),
    [
      handleOnBlur,
      handleOnFocus,
      handleInputOnChange,
      handleInputOnMouseDown,
      id,
      inputValue,
      isAvailable,
      isOpen,
    ],
  )

  const getListboxProps = useCallback(
    () => ({
      id: `${id}-listbox`,
      ref: listboxRef as any,
      role: 'listbox',
      onMouseDown: handleListboxOnMouseDown,

      'aria-labelledby': `${id}-label`,
    }),
    [id],
  )

  const getOptionProps = useCallback(
    ({ index, option }) => {
      const selected = value?.find(
        x => x !== null && getOptionSelected<string>(option, x),
      )
      const disabled = getOptionDisabled?.(option)

      return {
        key: index,
        id: `${id}-option-${index}`,
        role: 'option',
        tabIndex: -1,
        onClick: handleOptionOnClick,
        onMouseOver: handleOptionOnMouseOver,

        'data-option-index': index,
        'data-option-selected': selected,
        'aria-disabled': disabled,
        'aria-selected': selected,
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
    () => ({
      tabIndex: -1,
      onClick: handleOnClear,
    }),
    [handleOnClear],
  )

  const getPopoverButtonProps = useCallback(
    () => ({
      tabIndex: -1,
      onClick: handleToggle,
    }),
    [handleToggle],
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
