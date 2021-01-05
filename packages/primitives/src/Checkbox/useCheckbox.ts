import * as React from 'react'
import { useControlled } from '@kodiak-ui/hooks'

export type UseCheckboxProps = {
  indeterminate?: boolean
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function useCheckbox({
  id,
  indeterminate,
  error,
  checked: checkedProp,
  defaultChecked,
  readOnly,
  disabled,
  onChange,
  name,
}: UseCheckboxProps) {
  const [isChecked, setIsChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Checkbox',
    state: 'checked',
  })

  const handleOnChange = React.useCallback(
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (readOnly || disabled) {
        event.preventDefault()
        return
      }

      if (isChecked) {
        setIsChecked(event.target.checked)
      } else {
        setIsChecked(indeterminate ? true : event.target.checked)
      }

      onChange?.(event)
    },
    [indeterminate, readOnly, disabled, isChecked, setIsChecked, onChange],
  )

  const getLabelProps = React.useCallback(
    function getLabelProps() {
      return {
        htmlFor: id,
        'data-checkbox-disabled': disabled,
      }
    },
    [disabled, id],
  )

  const getInputProps = React.useCallback(
    function getInputProps() {
      return {
        id: id,
        type: 'checkbox',
        checked: isChecked,
        readOnly,
        disabled,
        'aria-disabled': disabled,
        onChange: handleOnChange,
        name,
      }
    },
    [id, readOnly, disabled, isChecked, handleOnChange, name],
  )

  const getIconProps = React.useCallback(
    function getIconProps() {
      return {
        isChecked,
        isIndeterminate: indeterminate,
        'aria-hidden': true,
        'data-checkbox-checked': isChecked,
        'data-checkbox-indeterminate': indeterminate,
        'data-checkbox-error': !!error,
      }
    },
    [error, indeterminate, isChecked],
  )

  return {
    getLabelProps,
    getInputProps,
    getIconProps,
  }
}
