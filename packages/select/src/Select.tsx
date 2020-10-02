import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { VariantProps } from 'kodiak-ui'

export interface SelectProps extends VariantProps {
  children: React.ReactNode
}

export function Select({
  children,
  variantKey = 'selects',
  ...props
}: SelectProps) {
  return (
    <Box __base={{ position: 'relative' }} variantKey={variantKey} {...props}>
      {children}
    </Box>
  )
}
