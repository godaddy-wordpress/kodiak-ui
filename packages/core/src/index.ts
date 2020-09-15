import * as React from 'react'
import {
  jsx as emotion,
  ThemeContext as EmotionContext,
  InterpolationWithTheme,
} from '@emotion/core'
import { SerializedStyles } from '@emotion/serialize'
import styled from '@emotion/styled'
import { css, Theme, ThemeUIStyleObject } from '@theme-ui/css'

type SxStyleProp = ThemeUIStyleObject

import { createShouldForwardProp } from '@styled-system/should-forward-prop'

export const shouldForwardProp = createShouldForwardProp([])

// based on https://github.com/developit/dlv
export const get = (
  obj: Record<string, unknown>,
  key: any,
  def?: any,
  p?: any,
  undef?: any,
) => {
  key = key && key.split ? key.split('.') : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}

const getCSS = props => {
  if (!props.sx && !props.css) return undefined
  return theme => {
    const styles = css(props.sx)(theme)
    const raw = typeof props.css === 'function' ? props.css(theme) : props.css
    return [styles, raw]
  }
}

const parseProps = props => {
  if (!props) return null
  const next: typeof props & { css?: InterpolationWithTheme<any> } = {}
  for (const key in props) {
    if (key === 'sx') continue
    next[key] = props[key]
  }
  const css = getCSS(props)
  if (css) next.css = css
  return next
}

export const jsx: typeof React.createElement = (type, props, ...children) =>
  emotion.apply(undefined, [type, parseProps(props), ...children])

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
  variant?: string // @deprecated
  variantKey?: string // @deprecated
  variants?: string | string[]
}

/**
 * Legacy method for getting variants from a theme
 *
 * Use getVariants instead which parses the `variants` prop.
 *
 * @deprecated
 */
export function variant({
  variant,
  theme,
  variantKey,
}: { theme: Theme } & VariantProps) {
  return css(
    get(
      theme,
      variantKey ? `${variantKey}.${variant}` : (variant as string | number),
      get(theme, variantKey as string | number),
    ),
  )(theme)
}

/**
 * Get the appropriate CSS from the theme for the
 * specified variants.
 *
 * @param variants string or array of variants
 */
export const getVariants = (variants: string | string[]) => (theme: Theme) =>
  Array.isArray(variants)
    ? css(
        variants?.reduce((acc, curr) => {
          return {
            ...acc,
            ...get(theme, curr),
          }
        }, {}),
      )(theme)
    : css(get(theme, variants as string))(theme)

/**
 * Get the appropriate CSS from the theme for the specified
 * components.
 *
 * @param base string or array of base component defaults
 */
export const getComponentBase = (base: string | string[]) => (theme: Theme) =>
  Array.isArray(base)
    ? css(
        base?.reduce((acc, curr) => {
          return {
            ...acc,
            ...get(theme, curr),
          }
        }, {}),
      )(theme)
    : css(get(theme, base as string))(theme)

export interface ContextValue {
  theme: Theme
}

export const Context = React.createContext<ContextValue>({
  theme: {},
})

export const useKodiakUi = () => React.useContext(Context)

interface ProviderProps {
  theme: Theme
  children: React.ReactNode
}

export function ThemeProvider({ theme, children }: ProviderProps) {
  return jsx(
    EmotionContext.Provider,
    { value: theme },
    jsx(Context.Provider, {
      value: theme,
      children,
    }),
  )
}

export { css, styled }
export type { Theme, SxStyleProp, SerializedStyles }
