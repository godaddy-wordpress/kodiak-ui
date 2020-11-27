import * as React from 'react'
import { jsx as emotion } from '@emotion/react'
import { parseProps } from './parse-props'

import styled from '@emotion/styled'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import themeDefault from './theme-default'
import {
  ColorMode,
  ThemeUIStyleObject,
  Theme as ThemeUITheme,
  SxProps,
} from './types'
import { get, css } from './css'

import './react-jsx'

export * from './provider'
export * from './shared-provider'
export * from './types'
export * from './css'
// export { jsx } from './jsx'

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

// export type GlobalStylesObject = { [k: string]: ThemeUIStyleObject }

// type System = Omit<
//   Theme,
//   | 'initialColorModeName'
//   | 'useBodyStyles'
//   | 'useBorderBox'
//   | 'useCustomProperties'
//   | 'useColorSchemeMediaQuery'
//   | 'useLocalStorage'
// >

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
  system?: Theme
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

export const shared = ({ __shared, theme }) => {
  if (__shared && Object.keys(__shared)?.length > 0) {
    return css(__shared)(theme)
  }

  return null
}

export { styled }

export const jsx: typeof React.createElement = (type, props, ...children) =>
  emotion.apply(undefined, [type, parseProps(props), ...children])
