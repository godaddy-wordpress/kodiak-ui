import styled from '@emotion/styled'
import { Box, variant, sx } from '../Box'

type LabelProps = JSX.IntrinsicElements['label'] &
  React.ComponentProps<typeof Box>

export const Input = styled<'label', LabelProps>('label', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, theme }) => variant({ variant: variantProp, theme }),
  sx,
)
