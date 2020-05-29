import * as React from 'react'
import { Box } from '../Box'

type NavItemProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Box>

export const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(
  function NavItem(
    {
      children,
      variantKey = 'navs',
      variant = 'navItem',
      as: renderAs = 'li',
      ...props
    },
    forwardedRef,
  ) {
    return (
      <Box
        variantKey={variantKey}
        variant={variant}
        as={renderAs}
        ref={forwardedRef as any}
        sx={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}
        {...props}
      >
        {children}
      </Box>
    )
  },
)
