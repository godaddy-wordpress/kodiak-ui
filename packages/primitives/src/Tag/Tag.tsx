import * as React from 'react'
import {
  variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  SerializedStyles,
} from '@kodiak-ui/core'

export type TagProps = { children: React.ReactNode } & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    alignItems: 'center',
    bg: 'muted',
    borderRadius: 'default',
    color: 'text',
    display: 'inline-flex',
  })(theme)
}

const TagStyle = styled('div')<TagProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'tags', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export function Tag(props: TagProps) {
  return <TagStyle {...props} />
}
