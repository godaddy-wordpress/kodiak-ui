import styled from '@emotion/styled'
import {
  space,
  color,
  typography,
  border,
  position,
  shadow,
} from 'styled-system'
import { sx } from '../Box/Box'
import { ButtonProps, shouldForwardProp, base, buttonVariant } from './Button'

/**
 * AnchorButton primitive component
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
  buttonVariant,
  space,
  color,
  typography,
  border,
  position,
  shadow,
  sx,
)
