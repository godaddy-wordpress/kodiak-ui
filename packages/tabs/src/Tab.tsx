import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { SxStyleProp } from 'theme-ui'

export type TabProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    bg: 'transparent',
    border: 'none',
    cursor: 'pointer',
    p: 4,
  })(theme)
}

export const Tab = styled('button')<TabProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'tab', variantKey = 'tabs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
