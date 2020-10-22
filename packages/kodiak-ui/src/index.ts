import * as React from 'react'
import { jsx as emotion, InterpolationWithTheme } from '@emotion/core'
import styled from '@emotion/styled'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import themeDefault from './theme-default'
import { ColorMode, ThemeUIStyleObject, Theme as ThemeUITheme } from './types'
import { css } from './css'

import './react-jsx'

export * from './provider'
export * from './types'

export type SxProps = {
  sx?: ThemeUIStyleObject
}

export type SxStyleProp = ThemeUIStyleObject

export type Variant = {
  [key: string]: ThemeUIStyleObject
}

export type Component = {
  [key: string]: ThemeUIStyleObject
}

export type KodiakState = {
  variants: Variant
  components: Component
  variant: (
    key: string,
    styles: ThemeUIStyleObject,
  ) => { key: string; styles: ThemeUIStyleObject }
  component: (
    key: string,
    styles: ThemeUIStyleObject,
  ) => { key: string; styles: ThemeUIStyleObject }
}

export type ScaleArray<T> = T[]
export type ScaleObject<T> = { [K: string]: T | Scale<T>; [I: number]: T }
export type Scale<T> = ScaleArray<T> | ScaleObject<T>
export type TLength = string | 0 | number

export type ScaleColorMode = ColorMode & {
  /**
   * Nested color modes can provide overrides when used in conjunction with
   * `Theme.initialColorModeName and `useColorMode()`
   */
  modes?: {
    [k: string]: ColorMode
  }
}

export type GlobalStylesObject = { [k: string]: ThemeUIStyleObject }

type System = Omit<
  Theme,
  | 'initialColorModeName'
  | 'useBodyStyles'
  | 'useBorderBox'
  | 'useCustomProperties'
  | 'useColorSchemeMediaQuery'
  | 'useLocalStorage'
>

type ConfigurationOptions = Pick<
  ThemeUITheme,
  | 'initialColorModeName'
  | 'useBodyStyles'
  | 'useBorderBox'
  | 'useCustomProperties'
  | 'useColorSchemeMediaQuery'
  | 'useLocalStorage'
>

export type CreateDesignSystemOptions = {
  system?: System
  global?: { [key: string]: ThemeUIStyleObject }
  options?: ConfigurationOptions
}

export type GlobalStyleObject = {
  [key: string]: ThemeUIStyleObject
}

export type Theme = ThemeUITheme & { global?: GlobalStyleObject }

export const Store = createVanilla<KodiakState>(set => ({
  variants: null,
  components: null,
  variant: (key: string, styles: ThemeUIStyleObject) => {
    set((state: KodiakState) => ({
      variants: { ...state.variants, [key]: styles },
    }))
    return { key, styles }
  },
  component: (key: string, styles: ThemeUIStyleObject) => {
    set((state: KodiakState) => ({
      components: { ...state.components, [key]: styles },
    }))
    return { key, styles }
  },
}))

export const variant = Store.getState().variant
export const component = Store.getState().component

export const useKodiakStore = create(Store)

export function useVariant(variant: Variant): ThemeUIStyleObject {
  const variants = Store.getState().variants
  return variants?.[(variant?.key as unknown) as string] || null
}

export function useVariants() {
  return Store.getState().variants
}

export function useComponent(component: Component) {
  const components = Store.getState().components
  return components?.[(component?.key as unknown) as string] || null
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
export const get = (obj: Theme, key: any, def?: any, p?: any, undef?: any) => {
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
export function sx({ sx, theme }: { sx?: any; theme: any }): any {
  return css(sx)(theme)
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

export type BaseProp = { base?: string | string[]; __base?: ThemeUIStyleObject }

export type KodiakUIProps = BaseProp & VariantProps & SxProps

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
