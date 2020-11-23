import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'
import { useHighlightIndex } from './useHighlightIndex'

export type UseAutocompleteProps = {
  componentName?: string
  isOpen?: boolean
  isMulti?: boolean
  value?: string[]
  inputValue?: string
  defaultValue?: string[]
  openOnFocus?: boolean
  autoHighlightFirstOption?: boolean
  options: string[]

  // handlers
  onCloseChange?: (event: KeyboardEvent | MouseEvent | FocusEvent) => void
  onOpenChange?: (event: KeyboardEvent | MouseEvent | FocusEvent) => void
  onValueChange?: () => void
  onInputValueChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void
  onHighlightedIndexChange?: (event, option: string) => void

  // overwritable getters
  getOptionSelected?: <T>(option: T, value: T) => boolean
  getOptionDisabled?: <T>(option: T) => boolean
}

export function useAutocomplete({
  componentName = 'useAutocomplete',
  isMulti = false,
  isOpen: isOpenProp,
  value: valueProp,
  inputValue: inputValueProp,
  defaultValue = null,
  openOnFocus = true,
  autoHighlightFirstOption,
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

  const filteredOptions = useMemo(() => options?.filter(option => option), [
    options,
  ])

  const {} = useHighlightIndex(
    {
      isOpen,
      options: filteredOptions,
      autoHighlightFirstOption,
      onHighlightedIndexChange,
    },
    inputRef,
    listboxRef,
  )

  const isAvailable = isOpen && filteredOptions?.length > 0
  const isDirty = inputValue?.length > 0

  const handleOnOpen = useCallback(
    event => {
      if (isOpen) {
        return
      }

      setIsOpen(true)
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

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          handleOnOpen(event)
          break
        case 'ArrowUp':
          event.preventDefault()
          handleOnOpen(event)
          break
        case 'Escape':
          if (isOpen) {
            event.preventDefault()
            event.stopPropagation()

            handleOnClose(event)
          }
          break
        default:
      }
    },
    [handleOnClose, handleOnOpen, isOpen],
  )

  function handleOnClick() {
    // Always automatically focus on input when opening
    inputRef?.current?.focus()
  }

  function handleOptionOnClick(event) {
    const index = Number(event.currentTarget.getAttribute('data-option-index'))

    // Do the actual selection of the item
  }

  const handleOnFocus = useCallback(
    event => {
      setIsFocused(true)

      if (openOnFocus) {
        handleOnOpen(event)
      }
    },
    [handleOnOpen, openOnFocus],
  )

  const handleOnBlur = useCallback(
    event => {
      setIsFocused(false)
      handleOnClose(event)
    },
    [handleOnClose],
  )

  const handleOnMouseDown = useCallback(
    event => {
      if (event?.target?.getAttribute('id') !== id) {
        event.preventDefault()
      }
    },
    [id],
  )

  const handleInputOnMouseDown = useCallback(
    event => {
      if (inputValue === '' || !isOpen) {
        handleToggle(event)
      }
    },
    [handleToggle, inputValue, isOpen],
  )

  function handleListboxOnMouseDown(event) {
    event.preventDefault()
  }

  function handleOptionOnMouseOver(event) {
    // Set the highlighted index
  }

  const handleInputOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event?.target?.value

      if (inputValue !== newValue) {
        setInputValue(newValue)
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
      const selected = (isMulti ? value : [value]).some(
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
        'aria-disabled': disabled,
        'aria-selected': selected,
      }
    },
    [getOptionDisabled, getOptionSelected, id, isMulti, value],
  )

  return {
    isOpen,
    isAvailable,
    isDirty,
    isFocused,
    value,
    getRootProps,
    getLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
  }
}
