import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps } from '@kodiak-ui/core'

export interface SelectProps extends VariantProps {
  children: React.ReactNode
}

export function Select({
  children,
  variantKey = 'selects',
  ...props
}: SelectProps) {
  return (
    <Box variantKey={variantKey} {...props}>
      {children}
    </Box>
  )
}
