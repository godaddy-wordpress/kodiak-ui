import * as React from 'react'
import { UseSelectGetLabelPropsOptions } from 'downshift'
import { VariantProps } from '@kodiak-ui/core'
import { Label } from '@kodiak-ui/primitives'

export interface SelectLabelProps
  extends VariantProps,
    UseSelectGetLabelPropsOptions {
  children: React.ReactNode
}

export function SelectLabel({
  children,
  variantKey = 'selects',
  ...props
}: SelectLabelProps) {
  return (
    <Label variantKey={variantKey} {...props}>
      {children}
    </Label>
  )
}
