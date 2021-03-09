import * as React from 'react'
import { jsx as emotionJsx } from '@emotion/core'
import styled from '@emotion/styled'
import create from 'zustand'
import themeDefault from './theme-default'
import { ColorMode, ThemeUIStyleObject, Theme as ThemeUITheme } from './types'
import { get, css } from './css'

import './react-jsx'

export * from './provider'
export * from './shared-provider'
export * from './types'
export * from './css'

export { keyframes } from '@emotion/core'

export type Variant = {
  [key: string]: ThemeUIStyleObject
}

export type Component = {
  [key: string]: ThemeUIStyleObject
}

export type KodiakState = {
  variants?: Variant | null
  components?: Component | null
  mode?: string
  variant: (
    key: string,
    styles: ThemeUIStyleObject,
  ) => { key: string; styles: ThemeUIStyleObject }
  component: (
    key: string,
    styles: ThemeUIStyleObject,
  ) => { key: string; styles: ThemeUIStyleObject }
  setMode: (mode: string) => void
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
  components?: { [key: string]: ThemeUIStyleObject }
  variants?: { [key: string]: ThemeUIStyleObject }
  modes?: { [key: string]: any }
  options?: ConfigurationOptions
  globalScope?: string | string[]
}

export type GlobalStyleObject = {
  [key: string]: ThemeUIStyleObject
}

export type Theme = ThemeUITheme & { global?: GlobalStyleObject }

export const useStore = create<KodiakState>(set => ({
  variants: null,
  components: null,
  mode: '',
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
  setMode: (mode: string) => set({ mode }),
}))

export function useModes(): [string, (mode: string) => void] {
  const mode = useStore(state => state.mode)
  const setMode = useStore(state => state.setMode)

  return [mode, setMode]
}

export const variant = useStore.getState().variant
export const component = useStore.getState().component

export function useVariant(variant: Variant): ThemeUIStyleObject {
  const variants = useStore(state => state.variants)
  return variants?.[(variant?.key as unknown) as string] || null
}

export function useVariants() {
  const variants = useStore(state => state.variants)
  return variants
}

export function useComponent(component: Component) {
  const components = useStore(state => state.components)
  return components?.[(component?.key as unknown) as string] || null
}

export function useComponents() {
  const components = useStore(state => state.components)
  return components
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
  const next: typeof props & { css?: any } = {}
  for (const key in props) {
    if (key === 'sx') continue
    next[key] = props[key]
  }
  const css = getCSS(props)
  if (css) next.css = css
  return next
}

export const jsx: typeof React.createElement = <
  P extends Record<string, unknown>
>(
  type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
  props: React.Attributes & P,
  ...children: React.ReactNode[]
): any => emotionJsx(type, parseProps(props), ...children)

export function createDesignSystem({
  system,
  global,
  variants,
  components,
  modes,
  options,
  globalScope = 'body',
}: CreateDesignSystemOptions = {}): { theme: Theme } {
  const globalStyles = Array.isArray(globalScope)
    ? globalScope?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: { ...themeDefault?.global?.body, ...global },
        }),
        {},
      )
    : { [globalScope]: { ...themeDefault?.global?.body, ...global } }

  const theme = {
    ...options,
    ...themeDefault,
    ...system,
    ...components,
    ...variants,
    modes,
    global: {
      ...globalStyles,
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

export type SxStyleProp = ThemeUIStyleObject

export type SxProps = { sx?: ThemeUIStyleObject }

export type BaseProp = { base?: string | string[]; __base?: ThemeUIStyleObject }

export type SharedProp = { __shared?: ThemeUIStyleObject }

export type KodiakUIProps = BaseProp & SharedProp & VariantProps & SxProps

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
