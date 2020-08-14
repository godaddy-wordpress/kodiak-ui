import styled from '@emotion/styled'
import { SxStyleProp, Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  variant,
  sx,
  shouldForwardProp,
  systemProps,
  VariantProps,
  SystemProps,
} from '../Box'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
    color: 'inherit',
    bg: 'transparent',
  })(theme)

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps &
  SystemProps & { sx?: SxStyleProp }

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Input = styled('input', {
  shouldForwardProp,
})<InputProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, variantKey = 'inputs', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
  sx,
)
