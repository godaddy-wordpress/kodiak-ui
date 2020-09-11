import * as React from 'react'
import { UseComboboxGetToggleButtonPropsOptions } from 'downshift'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'
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
  const baseStyles: SxStyleProp = React.useMemo(
    () => ({
      bg: 'transparent',
      border: 'none',
      borderLeft: '1px solid',
      borderColor: 'muted',
      borderRadius: 'none',
      bottom: 0,
      color: 'text',
      px: 4,
      position: 'absolute',
      right: 0,
      top: 0,
    }),
    [],
  )

  return (
    <Button
      __base={baseStyles}
      ref={ref as any}
      variantKey={variantKey}
      {...props}
    >
      {children}
    </Button>
  )
})
