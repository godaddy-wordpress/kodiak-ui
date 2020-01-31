import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import {
  space,
  color,
  typography,
  border,
  position,
  shadow,
} from 'styled-system'
import { variant, sx } from '../Box/Box'
import { ButtonProps, shouldForwardProp, base } from './Button'

/**
 * Button primitive component
 */
export const AnchorButton = styled<'a', ButtonProps>('a', {
  shouldForwardProp,
})(
  {
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  },
  base,
  variant,
  space,
  color,
  typography,
  border,
  position,
  shadow,
  sx,
)
