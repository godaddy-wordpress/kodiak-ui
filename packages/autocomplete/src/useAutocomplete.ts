import {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'

export type UseAutocompleteProps = {
  componentName?: string
  isOpen?: boolean
  isMulti?: boolean
  value?: string[]
  inputValue?: string
  defaultValue?: string[]
  openOnFocus?: boolean
  options: string[]

  // handlers
  onCloseChange?: (event: KeyboardEvent | MouseEvent | FocusEvent) => void
  onOpenChange?: (event: KeyboardEvent | MouseEvent | FocusEvent) => void
  onValueChange?: () => void
  onInputValueChange?: () => void

  // overwritable getters
  getOptionSelected?: <T>(option: T, value: T) => boolean
  getOptionDisabled?: <T>(option: T) => boolean
}

export function useAutocomplete({
  componentName = 'useAutocomplete',
  isMulti = false,
  isOpen: isOpenProp = false,
  value: valueProp,
  inputValue: inputValueProp,
  defaultValue = null,
  openOnFocus = true,
  options,

  onCloseChange,
  onOpenChange,
  onValueChange,
  onInputValueChange,

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

  const isListboxAvailable = isOpen && filteredOptions?.length > 0
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

  function handleOnClose(event) {
    if (!isOpen) {
      return
    }

    setIsOpen(false)
    onCloseChange?.(event)
  }

  function handleOnClick() {
    // Always automatically focus on input when opening
    inputRef?.current?.focus()
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

  const getRootProps = useCallback(
    () => ({
      role: 'combobox',
      onClick: handleOnClick,

      'aria-owns': isListboxAvailable ? `${id}-listbox` : null,
      'aria-expanded': isListboxAvailable,
    }),
    [id, isListboxAvailable],
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

      'aria-controls': isListboxAvailable ? `${id}-listbox` : null,
      'aria-autocomplete': 'list',
      'aria-activedescendant': isOpen ? '' : null,
    }),
    [handleOnFocus, id, inputValue, isListboxAvailable, isOpen],
  )

  const getListboxProps = useCallback(
    () => ({
      id: `${id}-listbox`,
      ref: listboxRef as any,
      role: 'listbox',

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

        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected,
      }
    },
    [getOptionDisabled, getOptionSelected, id, isMulti, value],
  )

  return {
    isOpen,
    isListboxAvailable,
    isDirty,
    value,
    getRootProps,
    getLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
  }
}
