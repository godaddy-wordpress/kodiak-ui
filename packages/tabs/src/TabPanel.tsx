import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { VariantProps, SxStyleProp } from 'kodiak-ui'

export type TabPanelProps = {
  children?: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  function TabPanel(
    { variantKey = 'tabs', variant = 'tabPanel', children, ...props },
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
  },
)
