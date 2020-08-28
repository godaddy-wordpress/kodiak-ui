import * as React from 'react'
import { useControlled } from '@kodiak-ui/hooks'

export type UseCheckboxProps = {
  indeterminate?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export function useCheckbox({
  id,
  indeterminate,
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
      }
    },
    [id],
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
        checked: isChecked,
        indeterminate,
        'aria-hidden': true,
      }
    },
    [indeterminate, isChecked],
  )

  return {
    getLabelProps,
    getInputProps,
    getIconProps,
  }
}
