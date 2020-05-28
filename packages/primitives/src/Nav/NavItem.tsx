import * as React from 'react'
import { Box } from '../Box'

type NavItemProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Box>

export const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(
  function NavItem(
    {
      children,
      variantKey = 'navitem',
      variant,
      as: renderAs = 'li',
      ...props
    },
    forwardedRef,
  ) {
    return (
      <Box
        variantKey={variantKey}
        variant={variant}
        {...props}
        as={renderAs}
        ref={forwardedRef as any}
      >
        {children}
      </Box>
    )
  },
)
