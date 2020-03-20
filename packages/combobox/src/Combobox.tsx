import * as React from 'react'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives'

export interface ComboboxProps extends VariantProps {
  children: React.ReactNode
}

export const Combobox = React.forwardRef(function Combobox(
  { children, variantKey = 'comboboxes', ...props }: ComboboxProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const baseStyles: SxStyleProp = React.useMemo(
    () => ({
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: 'default',
      position: 'relative',
    }),
    [],
  )

  return (
    <Box __base={baseStyles} ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Box>
  )
})
