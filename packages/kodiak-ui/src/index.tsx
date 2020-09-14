import * as CSS from 'csstype'
import { Global } from '@emotion/core'
import {
  jsx,
  ColorMode,
  ThemeProvider,
  Theme as ThemeUiTheme,
} from '@theme-ui/core'
import { css, ThemeUiStyleObject } from '@theme-ui/css'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import themeDefault from './theme-default'

type Variant = {
  [key: string]: ThemeUiStyleObject
}

type VariantsState = {
  variants: Variant
  variant: (key: string, styles: ThemeUiStyleObject) => void
}

export const variantsStore = createVanilla<VariantsState>(set => ({
  variants: null,
  variant: (key: string, styles: ThemeUiStyleObject) =>
    set((state: VariantsState) => ({
      variants: { ...state.variants, [key]: styles },
    })),
}))

const variantsSelector = (state: VariantsState) => state.variants

export const variant = variantsStore.getState().variant
export const useVariants = create(variantsStore)

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

/**
 * Kodiak UI enforces certain scale types for specific system types.
 * While technically any scale will accept arrays or objects, we feel like
 * there are cases where providing both options are confusing and not helpful to
 * the developer.
 *
 */
export type System = {
  borders?: Scale<CSS.Property.Border<string>>
  borderStyles?: Scale<CSS.Property.Border<string>>
  borderWidths?: Scale<CSS.Property.BorderWidth<TLength>>
  breakpoints?: ScaleArray<CSS.Property.Width<string>>
  colors?: ScaleColorMode
  fonts?: ScaleObject<CSS.Property.FontFamily>
  fontSizes?: Scale<CSS.Property.FontSize<number>>
  fontWeights?: ScaleObject<CSS.Property.FontWeight>
  letterSpacings?: ScaleObject<CSS.Property.LetterSpacing<TLength>>
  lineHeights?: ScaleObject<CSS.Property.LineHeight<TLength>>
  mediaQueries?: { [size: string]: string }
  radii?: ScaleObject<CSS.Property.BorderRadius<TLength>>
  space?: Scale<CSS.Property.Margin<number | string>>
  sizes?: ScaleObject<CSS.Property.Height<string> | CSS.Property.Width<string>>
  shadows?: ScaleObject<CSS.Property.BoxShadow>
  transitions?: ScaleObject<CSS.Property.Transition>
  zIndices?: ScaleObject<CSS.Property.ZIndex>
}

type GlobalStyles = { [k: string]: ThemeUiStyleObject }

type CreateDesignSystemOptions = {
  system: System
  useCustomProperties?: boolean
  useBodyStyles?: boolean
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBorderBox?: boolean
  useLocalStorage?: boolean
  global?: GlobalStyles
}

type Theme = ThemeUiTheme & { global: GlobalStyles }

export function createDesignSystem({
  system,
  global,
  ...rest
}: CreateDesignSystemOptions): { theme: Theme } {
  const theme = {
    ...rest,
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

const GlobalStyles = ({ global }) =>
  jsx(Global, {
    styles: emotionTheme => {
      const theme = emotionTheme as ThemeUiTheme

      return css({
        '*': {
          boxSizing: 'border-box',
        },
        ...global,
      })(theme)
    },
  })

interface ProviderProps {
  theme: ThemeUiTheme & { global: GlobalStyles }
  children?: React.ReactNode
}

export function Provider({ theme: baseTheme, children }: ProviderProps) {
  const variants = useVariants(variantsSelector)
  const global = baseTheme?.global

  const theme = {
    ...baseTheme,
    ...variants,
  }

  return jsx(ThemeProvider, { theme }, jsx(GlobalStyles, { global }), children)
}
