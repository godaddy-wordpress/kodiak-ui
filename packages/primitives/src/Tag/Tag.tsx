import * as React from 'react'
import { _variant, VariantProps, styled, css, sx, Theme } from 'kodiak-ui'

export type TagProps = { children: React.ReactNode } & VariantProps

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

const TagStyle = styled('div')<TagProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'default', variantKey = 'tags', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export function Tag(props: TagProps) {
  return <TagStyle {...props} />
}
