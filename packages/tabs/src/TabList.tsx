import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'

export type TabListProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps &
  React.HTMLAttributes<HTMLDivElement>

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function TabList(
    { variantKey = 'tabs', variant = 'tabList', children, ...props },
    forwardedRef,
  ) {
    return (
      <Box
        ref={forwardedRef}
        variant={variant}
        variantKey={variantKey}
        role="tablist"
        {...props}
      >
        {children}
      </Box>
    )
  },
)
