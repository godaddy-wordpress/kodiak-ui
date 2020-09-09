import * as React from 'react'
import { UseSelectGetLabelPropsOptions } from 'downshift'
import { VariantProps } from '@kodiak-ui/core'
import Label from '@kodiak-ui/primitives/label'

export interface SelectLabelProps
  extends VariantProps,
    UseSelectGetLabelPropsOptions {
  children: React.ReactNode
}

export const SelectLabel = React.forwardRef(function SelectLabel(
  { children, variantKey = 'selects', ...props }: SelectLabelProps,
  ref: React.Ref<HTMLLabelElement>,
) {
  return (
    <Label ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Label>
  )
})
