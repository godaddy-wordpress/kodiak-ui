import * as React from 'react'
import { UseSelectGetToggleButtonPropsOptions } from 'downshift'
import { VariantProps } from '@kodiak-ui/core'
import { Button } from '@kodiak-ui/primitives'

export interface SelectButtonProps
  extends VariantProps,
    UseSelectGetToggleButtonPropsOptions {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit' | undefined
}

export function SelectButton({
  children,
  variantKey = 'selects',
  ...props
}: SelectButtonProps) {
  return (
    <Button variantKey={variantKey} {...props}>
      {children}
    </Button>
  )
}
