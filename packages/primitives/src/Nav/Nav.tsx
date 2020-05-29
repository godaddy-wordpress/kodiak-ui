import * as React from 'react'
import { Box } from '../Box'

type NavProps = {
  children: React.ReactNode
  'aria-label'?: string
  dismissLabel?: string
  onDismiss?: () => void
} & React.ComponentProps<typeof Box>

export const Nav = React.forwardRef<HTMLUListElement, NavProps>(function Menu(
  { children, variantKey = 'navs', variant, ...props },
  forwardedRef,
) {
  return (
    <Box as="nav">
      <Box
        __base={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        ref={forwardedRef as any}
        as="ul"
        variantKey={variantKey}
        variant={variant}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
})
