import styled from '@emotion/styled'
import * as React from 'react'
import { css, IntrinsicSxElements, Theme } from 'theme-ui'
import type { SxStyleProp } from 'kodiak-ui'
import { SerializedStyles } from '@emotion/serialize'
import { get } from 'kodiak-ui'

/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
export function sx(props: {
  theme: Theme
  sx?: SxStyleProp
}): SerializedStyles {
  return css(props.sx as any)(props.theme)
}

/**
 * base function allow the __base property to set default values
 * that are read from the theme but can still be overridden by theme variants
 */

export type BaseProps = {
  __base?: SxStyleProp
  base?: string | string[]
}

export function base(props: { theme: Theme } & BaseProps) {
  return css(props.__base as any)(props.theme)
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
export type VariantProps = {
  variant?: string
  variantKey?: string
}

export function variant({
  variant,
  theme,
  variantKey,
}: { theme: any } & VariantProps) {
  return css(
    get(
      theme,
      variantKey ? `${variantKey}.${variant}` : (variant as string | number),
      get(theme, variantKey as string | number),
    ),
  )(theme)
}

type IntrinicElements = Omit<IntrinsicSxElements['div'], 'color'>

export interface BaseProp {
  __base?: SxStyleProp
}

export type BoxProps = {
  as?: React.ElementType
} & BaseProp &
  VariantProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
)
