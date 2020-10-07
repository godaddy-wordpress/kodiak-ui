import styled from '@emotion/styled'
import {
  _variant,
  VariantProps,
  sx,
  BaseProp,
  getComponentBase,
} from 'kodiak-ui'
import { css } from 'theme-ui'
import { SxProps } from 'theme-ui'

function base({ theme, __base, base }) {
  const styles = base ? getComponentBase(base ? base : 'image')(theme) : null
  if (!styles) {
    return css(__base as any)(theme)
  }
  return styles
}

export type ImageProps = React.HTMLProps<HTMLImageElement> &
  VariantProps &
  SxProps &
  BaseProp

export const Image = styled<'img', ImageProps>('img')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'images', theme }) =>
    _variant({ variant: variantProp, variantKey, theme }),
  sx,
)
