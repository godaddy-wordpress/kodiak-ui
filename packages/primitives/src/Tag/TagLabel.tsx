import * as React from 'react'
import {
  _variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  SerializedStyles,
} from 'kodiak-ui'

export type TagLabelProps = { children: React.ReactNode } & VariantProps

function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    border: 'none',
    color: 'text',
    fontSize: 1,
    lineHeight: 1.2,
    py: 1,
    px: 2,
  })(theme)
}

export const TagLabel = styled('span')<TagLabelProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'tagLabel', variantKey = 'tags', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
