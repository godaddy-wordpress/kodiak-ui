import * as React from 'react'
import {
  _variant,
  styled,
  css,
  sx,
  Theme,
  getVariants,
  KodiakUIProps,
} from 'kodiak-ui'

export type TagLabelProps = KodiakUIProps & { children: React.ReactNode }

function base({ theme }: { theme: Theme }) {
  return css({
    border: 'none',
    color: 'text',
    fontSize: 1,
    lineHeight: 1.2,
    py: 1,
    px: 2,
  })(theme)
}

const variants = ({
  variant: variantProp = 'tagLabel',
  variantKey = 'tags',
  variants,
  theme,
}: KodiakUIProps & { theme: Theme }) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export const TagLabel = styled('span')<TagLabelProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variants,
  sx,
)
