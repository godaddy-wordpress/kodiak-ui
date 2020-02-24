import * as React from 'react'
import { SystemProps, VariantProps } from '@kodiak-ui/core'
import { Box } from '../Box'

type MenuProps = {
  children?: React.ReactNode
  'aria-label'?: string
  dismissLabel?: string
  onDismiss?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps &
  SystemProps

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  function Message({ children, variantKey = 'menu', ...props }, forwardedRef) {
    return (
      <Box as="nav">
        <Box
          __base={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          ref={forwardedRef}
          as="ul"
          variantKey={variantKey}
          variant="variant"
          {...props}
        >
          {children}
        </Box>
      </Box>
    )
  },
)
