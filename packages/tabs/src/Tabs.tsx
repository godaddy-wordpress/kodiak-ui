import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'

export type TabsProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { variantKey = 'tabs', variant, children, ...props },
  forwardedRef,
) {
  return (
    <Box
      ref={forwardedRef}
      variant={variant}
      variantKey={variantKey}
      {...props}
    >
      {children}
    </Box>
  )
})
