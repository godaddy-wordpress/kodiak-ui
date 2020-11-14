import { useCallback, useMemo } from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'

export type UseAutocompleteProps = {
  componentName?: string
  isOpen?: boolean
  isMulti?: boolean
  value?: string[]
  inputValue?: string
  defaultValue?: string[]
  options: string[]

  // handlers
  onOpenChange: () => void
  onValueChange: () => void
  onInputValueChange: () => void

  // overwritable getters
  getOptionSelected: <T>(option: T, value: T) => boolean
  getOptionDisabled: <T>(option: T) => boolean
}

export function useAutocomplete({
  componentName = 'useAutocomplete',
  isOpen: isOpenProp = false,
  isMulti = false,
  value: valueProp,
  inputValue: inputValueProp,
  defaultValue = null,
  options,
  getOptionSelected = (option, value) => option === value,
  getOptionDisabled,
}: UseAutocompleteProps) {
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

  const filteredOptions = useMemo(() => options?.filter(option => option), [
    options,
  ])

  const isListboxAvailable = isOpen && filteredOptions?.length > 0
  const isDirty = inputValue?.length > 0

  const getRootProps = useCallback(
    () => ({
      role: 'combobox',

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
      value: inputValue,

      autoComplete: 'nope',
      autoCapitalize: 'none',
      spellCheck: 'false',

      'aria-controls': isListboxAvailable ? `${id}-listbox` : null,
      'aria-autocomplete': 'list',
      'aria-activedescendant': isOpen ? '' : null,
    }),
    [id, inputValue, isListboxAvailable, isOpen],
  )

  const getListboxProps = useCallback(
    () => ({
      id: `${id}-listbox`,
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
