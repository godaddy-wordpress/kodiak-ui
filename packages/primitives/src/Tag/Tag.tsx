import * as React from 'react'
import {
  _variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  SerializedStyles,
  getVariants,
} from 'kodiak-ui'

export type TagProps = { children: React.ReactNode } & VariantProps

function base({ theme }: { theme: Theme }): SerializedStyles {
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

const tagVariant = ({
  variant: variantProp = 'default',
  variantKey = 'tags',
  variants,
  theme,
}: VariantProps & { theme: Theme }) => {
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
  tagVariant,
  sx,
)

export function Tag(props: TagProps) {
  return <TagStyle {...props} />
}
