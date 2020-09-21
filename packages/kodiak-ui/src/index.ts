import * as React from 'react'
import { jsx as emotion, InterpolationWithTheme } from '@emotion/core'
import { SerializedStyles } from '@emotion/serialize'
import styled from '@emotion/styled'
import { css } from '@theme-ui/css'
import type { SxStyleProp } from 'theme-ui'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import themeDefault from './theme-default'
import {
  CreateDesignSystemOptions,
  KodiakState,
  Theme,
  Variant,
  Component,
  StyleObject,
} from './types'

import './react-jsx'

// re-exports
export type {
  Component,
  CreateDesignSystemOptions,
  GlobalStylesObject,
  KodiakState,
  StyleObject,
  SxProps,
  Theme,
  Variant,
} from './types'

export type { SxStyleProp, SerializedStyles }

export * from './provider'

export const Store = createVanilla<KodiakState>(set => ({
  variants: null,
  components: null,
  variant: ({ key, styles }: { key: string; styles: StyleObject }) => {
    set((state: KodiakState) => ({
      variants: { ...state.variants, [key]: styles },
    }))
    return { key, styles }
  },
  component: (key: string, styles: StyleObject) => {
    set((state: KodiakState) => ({
      components: { ...state.components, [key]: styles },
    }))
    return { key, styles }
  },
}))

export const variant = Store.getState().variant
export const component = Store.getState().component

export const useKodiakStore = create(Store)

export function useVariant(variant: Variant): StyleObject {
  const variants = Store.getState().variants
  return variants?.[variant?.key] || null
}

export function useVariants() {
  return Store.getState().variants
}

export function useComponent(component: Component) {
  const components = Store.getState().components
  return components?.[component?.key] || null
}

export function useComponents() {
  return Store.getState().components
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

export function jsx(type: any, props: any, ...children: React.ReactNode[]) {
  return emotion.apply(undefined, [type, parseProps(props), ...children])
}

export function createDesignSystem({
  system,
  global,
  options,
}: CreateDesignSystemOptions = {}): { theme: Theme } {
  const theme = {
    ...options,
    ...themeDefault,
    ...system,
    global: {
      ...themeDefault?.global,
      ...global,
    },
  }

  return {
    theme,
  }
}

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
export function _variant({
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
export const getVariants = (variants: string | string[]) => (theme: Theme) => {
  const variantsToArray = Array.isArray(variants)
    ? variants
    : variants?.split(' ')

  return css(
    variantsToArray?.reduce((acc, curr) => {
      return {
        ...acc,
        ...get(theme, curr),
      }
    }, {}),
  )(theme)
}

/**
 * Get the appropriate CSS from the theme for the specified
 * components.
 *
 * @param base string or array of base component defaults
 */
export const getComponentBase = (base: string | string[]) => (theme: Theme) => {
  const baseToArray = Array.isArray(base) ? base : base?.split(' ')

  return css(
    baseToArray?.reduce((acc, curr) => {
      return {
        ...acc,
        ...get(theme, curr),
      }
    }, {}),
  )(theme)
}

export { css, styled }
