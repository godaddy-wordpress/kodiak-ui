import * as React from 'react'
import {
  _variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  getVariants,
  KodiakUIProps,
} from 'kodiak-ui'
import { Tag } from './Tag'
import { TagLabel } from './TagLabel'

export type TagDismissProps = {
  children: React.ReactNode
  icon: React.ReactNode
  onDismiss: () => void
} & VariantProps

function base({ theme }: { theme: Theme }) {
  return css({
    appearance: 'none',
    border: 'none',
    borderRadius: 'default',
    bg: 'muted',
    color: 'text',
    fontSize: 1,
    lineHeight: 1,
    py: 1,
    px: 2,
  })(theme)
}

const variants = ({
  variant: variantProp = 'tagDismiss',
  variantKey = 'tags',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

const TagDismissStyle = styled('button')<
  TagDismissProps['icon'] & KodiakUIProps
>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variants,
  sx,
)

export const TagDismiss = React.forwardRef(
  ({ children, icon, onDismiss }: TagDismissProps, ref: any) => (
    <Tag ref={ref} sx={{ p: 0 }}>
      <TagLabel sx={{ borderRight: '1px solid', borderColor: 'muted' }}>
        {children}
      </TagLabel>
      <TagDismissStyle onClick={onDismiss}>{icon}</TagDismissStyle>
    </Tag>
  ),
)
