import styled from '@emotion/styled'
import { base, buttonVariant } from './Button'
import { shouldForwardProp, sx, VariantProps } from '@kodiak-ui/core'

export type AnchorButtonProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  VariantProps

/**
 * AnchorButton primitive component
 */
export const AnchorButton = styled('a', {
  shouldForwardProp,
})<AnchorButtonProps>(
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
  sx,
)
