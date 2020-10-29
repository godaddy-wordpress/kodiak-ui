import * as React from 'react'
import { Box, BoxProps } from '../Box'

type NavItemProps = BoxProps<'li', unknown>

export const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(
  function NavItem(
    { children, variantKey = 'navs', variant = 'navItem', ...props },
    forwardedRef,
  ) {
    return (
      <Box
        variantKey={variantKey}
        variant={variant}
        as="li"
        ref={forwardedRef}
        sx={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}
        {...props}
      >
        {children}
      </Box>
    )
  },
)
