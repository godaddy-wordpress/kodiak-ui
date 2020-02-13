import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import {
  variant,
  sx,
  VariantProps,
  systemProps,
  SystemProps,
  shouldForwardProp,
} from '@kodiak-ui/core'
import { css, Theme } from 'theme-ui'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
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

export function buttonVariant({
  theme,
  variant: defaultVariant = 'buttons.primary',
}: {
  theme: Theme
  variant?: string
}) {
  return variant({ theme, variant: defaultVariant })
}

export type ButtonProps = VariantProps & SystemProps

/**
 * Button primitive component
 */
export const Button = styled<'button', ButtonProps>('button', {
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
