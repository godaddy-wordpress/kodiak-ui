import * as CSS from 'csstype'
import {
  jsx,
  css,
  ColorMode,
  Theme as ThemeUiTheme,
  ThemeProvider,
} from 'theme-ui'
import themeDefault from './theme-default'
import { Global } from '@emotion/core'

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
  // colorStyles?: Scale<ThemeUICSSProperties>
  // textStyles?: Scale<ThemeUICSSProperties>
  // opacities?: Scale<CSS.OpacityProperty>
}

export type Theme = System & { styles?: any }

type CreateDesignSystemOptions = {
  system: System
  useCustomProperties?: boolean
  useBodyStyles?: boolean
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBorderBox?: boolean
  useLocalStorage?: boolean
  styles?: any
  global?: any
}

export function createDesignSystem({
  system,
  styles,
  global,
  ...rest
}: CreateDesignSystemOptions): { theme: Theme } {
  const theme = {
    ...rest,
    ...themeDefault,
    ...system,
    styles: {
      ...themeDefault?.styles,
      ...styles,
    },
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
        body: {
          margin: 0,
          variant: 'styles.root',
        },
        ...global,
      })(theme)
    },
  })

interface ProviderProps {
  theme: ThemeUiTheme & { global: any }
  children?: React.ReactNode
}

export function Provider({ theme, children }: ProviderProps) {
  const global = theme?.global
  return jsx(ThemeProvider, { theme }, jsx(GlobalStyles, { global }), children)
}
