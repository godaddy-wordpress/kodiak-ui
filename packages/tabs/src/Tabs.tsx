import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps } from '@kodiak-ui/core'

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
