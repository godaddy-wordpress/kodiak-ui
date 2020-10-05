import styled from '@emotion/styled'
import * as React from 'react'
import { css, Theme } from 'theme-ui'
import { getVariants, SxStyleProp, VariantProps, _variant } from 'kodiak-ui'
import { SerializedStyles } from '@emotion/serialize'

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

export const boxVariant = ({
  variant: variantProp,
  variantKey,
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

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
  boxVariant,
  sx,
)
