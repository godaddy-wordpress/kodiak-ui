import styled from '@emotion/styled'
import {
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
  StyledSystemProps,
} from '../Box/Box'

type LabelProps = {
  variant?: string
} & StyledSystemProps

export const Label = styled<'label', LabelProps>('label', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp = 'default', theme }) =>
    variant({ variantKey: 'labels', variant: variantProp, theme }),
  ...styledSystemProps,
  sx,
)
