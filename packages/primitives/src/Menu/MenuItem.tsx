import * as React from 'react'
import { SystemProps, VariantProps } from '@kodiak-ui/core'
import { Box } from '../Box'
import { Link } from '../Link'

type MenuItemProps = {
  children: React.ReactNode
  isCurrent?: boolean
  href?: string
  rel?: HTMLAnchorElement['rel']
  as?: React.ElementType
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps &
  SystemProps

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  function Message(
    {
      children,
      isCurrent,
      variantKey = 'menuitem',
      variant,
      as: renderAs = 'a',
      href,
      rel,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <Box
        variantKey={variantKey}
        variant={variant}
        ref={forwardedRef}
        {...props}
      >
        <li>
          {renderAs === 'a' && (
            <Link
              __base={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
              href={href}
              aria-current={isCurrent}
              rel={rel}
            >
              {children}
            </Link>
          )}
          {renderAs !== 'a' && <Box as={renderAs}>{children}</Box>}
        </li>
      </Box>
    )
  },
)
