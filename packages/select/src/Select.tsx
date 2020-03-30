import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'

export interface SelectProps extends VariantProps {
  children: React.ReactNode
}

export function Select({
  children,
  variantKey = 'selects',
  ...props
}: SelectProps) {
  const base: SxStyleProp = React.useMemo(() => ({ position: 'relative' }), [])

  return (
    <Box __base={base} variantKey={variantKey} {...props}>
      {children}
    </Box>
  )
}
