import { getVariants } from '@kodiak-ui/core'
import {
  variant,
  sx,
  VariantProps,
  shouldForwardProp,
  styled,
  getComponentBase,
  css,
} from '@kodiak-ui/core'
import { base as baseProp, BaseProps } from '../Box'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme, base }) {
  const styles = getComponentBase(base ? base : 'button')(theme)
  if (!styles) {
    return css({
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 'default',
      '&:hover': {
        bg: 'secondary',
      },
    })(theme)
  }
  return styles
}

export const buttonVariant = ({
  variant: variantProp,
  variantKey = 'buttons',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return variant({ variant: variantProp, theme, variantKey, variants })
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps &
  BaseProps

/**
 * Button primitive component
 */
export const Button = styled('button', {
  shouldForwardProp,
})<ButtonProps>(
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
  baseProp,
  buttonVariant,
  sx,
)
