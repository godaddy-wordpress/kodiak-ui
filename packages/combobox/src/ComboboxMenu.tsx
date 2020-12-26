import * as React from 'react'
import { UseComboboxGetMenuPropsOptions } from 'downshift'
import {
  styled,
  css,
  sx,
  _variant as getVariantStyles,
  Theme,
  VariantProps,
  KodiakUIProps,
} from 'kodiak-ui'

export interface ComboboxMenuProps
  extends UseComboboxGetMenuPropsOptions,
    VariantProps {
  ref: React.Ref<HTMLUListElement>
  children: React.ReactNode
}

export function base({ theme }: { theme: Theme }) {
  return css({
    borderRadius: 'default',
    boxShadow: '0px 2px 6px rgba(28, 56, 78, 0.25)',
    maxHeight: '180px',
    overflowY: 'auto',
    margin: 1,
    minWidth: '150px',
    borderTop: 0,
    background: 'white',
    position: 'absolute',
    zIndex: 1000,
    listStyle: 'none',
    padding: 0,
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey,
  theme,
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

const Ul = styled('ul')<KodiakUIProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
)

export const ComboboxMenu = React.forwardRef(function ComboboxMenu(
  { children, variantKey = 'comboboxes', ...props }: ComboboxMenuProps,
  ref: React.Ref<HTMLUListElement>,
) {
  return (
    <Ul ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Ul>
  )
})
