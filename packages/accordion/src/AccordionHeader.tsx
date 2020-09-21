import * as React from 'react'
import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from 'kodiak-ui'

export type AccordionHeaderProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({})(theme)
}

export const AccordionHeader = styled('header')<AccordionHeaderProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({
    variant: variantProp = 'accordionHeader',
    variantKey = 'accordions',
    theme,
  }) => _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
