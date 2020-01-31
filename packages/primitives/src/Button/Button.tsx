import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
} from 'styled-system'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { variant, sx } from '../Box/Box'
import { css, Theme } from 'theme-ui'

export const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
  ...(border.propNames as string[]),
  ...(position.propNames as string[]),
  ...(shadow.propNames as string[]),
])

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
    borderRadius: 4,
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

export type ButtonProps = {
  variant?: string
} & SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  PositionProps &
  ShadowProps

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
  space,
  color,
  typography,
  border,
  position,
  shadow,
  sx,
)
