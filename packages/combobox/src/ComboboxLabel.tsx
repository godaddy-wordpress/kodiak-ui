import * as React from 'react'
import { UseComboboxGetLabelPropsOptions } from 'downshift'
import { VariantProps } from 'kodiak-ui'
import { Label } from '@kodiak-ui/primitives'

export interface ComboboxLabelProps
  extends VariantProps,
    UseComboboxGetLabelPropsOptions {
  children: React.ReactNode
  as?: any
}

export const ComboboxLabel = React.forwardRef(function ComboboxLabel(
  { children, variantKey = 'comboboxes', ...props }: ComboboxLabelProps,
  ref: React.Ref<HTMLLabelElement>,
) {
  return (
    <Label ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Label>
  )
})
