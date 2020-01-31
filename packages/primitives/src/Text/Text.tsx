import styled from '@emotion/styled'
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { variant, sx } from '../Box'

const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
])

type TextProps = {
  as?: React.ElementType
  variant?: string
} & SpaceProps &
  ColorProps &
  TypographyProps

export const Text = styled<'p', TextProps>('p', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  variant,
  space,
  color,
  typography,
  sx,
)
