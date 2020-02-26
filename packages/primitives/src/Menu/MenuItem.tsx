import * as React from 'react'
import { Box } from '../Box'

type MenuItemProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Box>

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(
    {
      children,
      variantKey = 'menuitem',
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
