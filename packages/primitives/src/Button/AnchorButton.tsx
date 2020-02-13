import styled from '@emotion/styled'
import { ButtonProps, base, buttonVariant } from './Button'
import { shouldForwardProp, sx, systemProps } from '@kodiak-ui/core'

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
  ...systemProps,
  sx,
)
