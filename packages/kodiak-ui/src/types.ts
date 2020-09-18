import * as CSS from 'csstype'
import {
  ThemeUiStyleObject as StyleObject,
  ColorMode,
  Theme as ThemeUiTheme,
} from '@theme-ui/css'

export type SxProps = {
  sx?: StyleObject
}

export type Variant = {
  [key: string]: StyleObject
}

export type Component = {
  [key: string]: StyleObject
}

export type KodiakState = {
  variants: Variant
  components: Component
  variant: (key: string, styles: StyleObject) => void
  component: (key: string, styles: StyleObject) => void
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

export type GlobalStyles = { [k: string]: StyleObject }

export type CreateDesignSystemOptions = {
  system: System
  useCustomProperties?: boolean
  useBodyStyles?: boolean
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBorderBox?: boolean
  useLocalStorage?: boolean
  global?: GlobalStyles
}

export type GlobalStyleObject = {
  [key: string]: StyleObject
}

export type Theme = ThemeUiTheme & { global?: GlobalStyleObject }
