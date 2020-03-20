import * as React from 'react'
import { UseComboboxGetMenuPropsOptions } from 'downshift'
import {
  styled,
  css,
  sx,
  variant as getVariantStyles,
  Theme,
  SerializedStyles,
  VariantProps,
} from '@kodiak-ui/core'

export interface ComboboxMenuProps
  extends UseComboboxGetMenuPropsOptions,
    VariantProps {
  ref: React.Ref<HTMLUListElement>
  children: React.ReactNode
}

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    borderTop: 0,
    background: 'white',
    boxShadow: 'default',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    listStyle: 'none',
    margin: 0,
    maxHeight: '200px',
    minWidth: '150px',
    maxWidth: '184px',
    overflowY: 'auto',
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey,
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

const Ul = styled('ul')<ComboboxMenuProps>(
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
