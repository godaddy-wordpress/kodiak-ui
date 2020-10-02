import * as React from 'react'
import { UseSelectGetItemPropsOptions } from 'downshift'
import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  styled,
  Theme,
  css,
  SerializedStyles,
} from 'kodiak-ui'

export type SelectMenuItemProps = {
  ref: React.Ref<HTMLLIElement>
  children: React.ReactNode
} & VariantProps &
  UseSelectGetItemPropsOptions<any>

/**
 * base
 *
 * Generate the base CSS for the SelectMenuItem component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    color: 'text',
    cursor: 'pointer',
    py: 3,
    px: 4,
    transition: 'all 0.2s ease-in-out',
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey,
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

const Li = styled('li')<SelectMenuItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
)

export const SelectMenuItem = React.forwardRef(function SelectMenuItem(
  { children, variantKey = 'selects', ...props }: SelectMenuItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  return (
    <Li ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Li>
  )
})
