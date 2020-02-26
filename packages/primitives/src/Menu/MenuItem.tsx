import * as React from 'react'
import { Box } from '../Box'
import { Link } from '../Link'

type MenuItemProps = {
  children: React.ReactNode
  isCurrent?: boolean
  href?: string
} & React.ComponentProps<typeof Box>

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(
    {
      children,
      isCurrent,
      variantKey = 'menuitem',
      variant,
      as: renderAs = 'li',
      href,
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
        {renderAs === 'a' && (
          <Link
            __base={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
            href={href}
            aria-current={isCurrent}
          >
            {children}
          </Link>
        )}
        {renderAs !== 'a' && <Box as={renderAs}>{children}</Box>}
      </Box>
    )
  },
)
