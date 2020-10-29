import * as React from 'react'
import { Box, BoxProps } from '../Box'

type NavProps = BoxProps<
  'ul',
  {
    children?: React.ReactNode
    'aria-label'?: string
    dismissLabel?: string
    onDismiss?: () => void
  }
>

export const Nav = React.forwardRef<HTMLUListElement, NavProps>(function Menu(
  { children, variantKey = 'navs', variant, __base, ...props },
  forwardedRef,
) {
  return (
    <Box as="nav">
      <Box
        __base={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          ...__base,
        }}
        as="ul"
        ref={forwardedRef}
        variantKey={variantKey}
        variant={variant}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
})
