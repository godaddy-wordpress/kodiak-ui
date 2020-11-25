import * as React from 'react'
import { UseComboboxGetItemPropsOptions } from 'downshift'
import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  styled,
  Theme,
  css,
} from 'kodiak-ui'

export type ComboboxMenuItemProps = {
  ref: React.Ref<HTMLLIElement>
  children: React.ReactNode
  as?: any
} & VariantProps &
  UseComboboxGetItemPropsOptions<any>

/**
 * base
 *
 * Generate the base CSS for the SelectMenuItem component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }) {
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
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

const Li = styled('li')<ComboboxMenuItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
)

export const ComboboxMenuItem = React.forwardRef(function ComboboxMenuItem(
  { children, variantKey = 'comboboxes', ...props }: ComboboxMenuItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  return (
    <Li ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Li>
  )
})
