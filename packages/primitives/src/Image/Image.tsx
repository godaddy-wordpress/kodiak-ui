import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
  BaseProp,
  base,
} from '../Box/Box'

export type ImageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  VariantProps &
  BaseProp

export const Image = styled('img', {
  shouldForwardProp,
})<ImageProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'images', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  sx,
)
