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

export type TagProps = KodiakUIProps & { children: React.ReactNode }

function base({ theme }: { theme: Theme }) {
  return css({
    alignItems: 'center',
    bg: 'muted',
    borderRadius: 'default',
    color: 'text',
    display: 'inline-flex',
    fontSize: 1,
    lineHeight: 1.2,
    py: 1,
    px: 2,
  })(theme)
}

const variants = ({
  variant: variantProp = 'default',
  variantKey = 'tags',
  variants,
  theme,
}: KodiakUIProps & { theme: Theme }) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

const TagStyle = styled('div')<TagProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variants,
  sx,
)

export const Tag = React.forwardRef((props: TagProps, ref: any) => (
  <TagStyle ref={ref} {...props} />
))
