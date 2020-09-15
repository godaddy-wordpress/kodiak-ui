import { css, Theme, SxStyleProp } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import styled from '@emotion/styled'

import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  get,
} from 'styled-system'

/**
 * propNames are typed as string[] | undefined. Undefined is not
 * an iterator so we have to cast propNames to only a string[]
 */
export const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
  ...(layout.propNames as string[]),
  ...(flexbox.propNames as string[]),
  ...(grid.propNames as string[]),
  ...(background.propNames as string[]),
  ...(border.propNames as string[]),
  ...(position.propNames as string[]),
  ...(shadow.propNames as string[]),
])

export type SystemProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps

export const systemProps = [
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
]

/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
export function sx(props: any): SerializedStyles {
  return css(props.sx)(props.theme)
}

/**
 * variant
 *
 * Returns a function that accept's the components
 * props. The variant and theme props are passed into `css`
 * to generate the Emotion css that will be applied to the
 * component
 *
 * Variants are defined in the theme with a key and then variant.
 *
 * {
 *   buttons: {
 *     primary: {
 *       bg: 'primary',
 *       color: 'white',
 *     }
 *   }
 * }
 */
export interface VariantProps {
  variant?: string
  variantKey?: string
  variants?: string | string[]
}

export function variant({
  variant,
  theme,
  variantKey,
  variants,
}: { theme: Theme } & VariantProps) {
  if (variants) {
    if (Array.isArray(variants)) {
      return css(
        variants?.reduce((acc, curr) => {
          return {
            ...acc,
            ...get(theme, curr),
          }
        }, {}),
      )(theme)
    }
    return css(get(theme, variants as string))(theme)
  }

  return css(
    get(
      theme,
      variantKey ? `${variantKey}.${variant}` : (variant as string | number),
      get(theme, variantKey as string | number),
    ),
  )(theme)
}

export function getComponentBase(base: string | string[]) {
  return function (theme: Theme) {
    if (Array.isArray(base)) {
      return css(
        base?.reduce((acc, curr) => {
          return {
            ...acc,
            ...get(theme, curr),
          }
        }, {}),
      )(theme)
    }

    return css(get(theme, base as string))(theme)
  }
}

export { css, styled }
export type { Theme, SxStyleProp, SerializedStyles }
