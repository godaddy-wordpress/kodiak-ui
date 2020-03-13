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

export const SelectButton = React.forwardRef(function SelectButton(
  { children, variantKey = 'selects', ...props }: SelectButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <Button
      __base={{
        bg: 'inherit',
        border: '1px solid',
        borderColor: 'muted',
        color: 'text',
        minWidth: '184px',
        textAlign: 'left',
      }}
      ref={ref}
      variantKey={variantKey}
      {...props}
    >
      {children}
    </Button>
  )
})
