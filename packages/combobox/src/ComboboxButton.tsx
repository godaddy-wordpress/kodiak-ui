import * as React from 'react'
import { UseComboboxGetToggleButtonPropsOptions } from 'downshift'
import { VariantProps } from '@kodiak-ui/core'
import { Button } from '@kodiak-ui/primitives'

export interface ComboboxButtonProps
  extends UseComboboxGetToggleButtonPropsOptions,
    VariantProps {
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit' | undefined
}

export const ComboboxButton = React.forwardRef(function ComboboxButton(
  { children, variantKey = 'comboboxes', ...props }: ComboboxButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <Button ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Button>
  )
})
