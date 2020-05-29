import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
} from '../Box/Box'

export type ImageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  VariantProps

export const Image = styled('img', {
  shouldForwardProp,
})<ImageProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'images', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  sx,
)
