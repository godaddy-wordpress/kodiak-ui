import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from '@kodiak-ui/core'

export type MenuListProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    bg: 'white',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    listStyle: 'none',
    margin: 0,
    mt: 2,
    outline: 'none',
    overflow: 'hidden',
    padding: 0,
  })(theme)
}

export const MenuList = styled('ul')<MenuListProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'menuList', variantKey = 'menus', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
