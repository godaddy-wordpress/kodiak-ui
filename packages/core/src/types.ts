import {
  ThemeUIStyleObject,
  ColorMode,
  Theme as ThemeUiTheme,
} from '@theme-ui/css'

export type StyleObject = ThemeUIStyleObject

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
  variant: ({ key: string, styles: StyleObject }) => Variant
  component: (key: string, styles: StyleObject) => Component
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

export type GlobalStylesObject = { [k: string]: StyleObject }

type System = Omit<
  ThemeUiTheme,
  | 'initialColorModeName'
  | 'useBodyStyles'
  | 'useBorderBox'
  | 'useCustomProperties'
  | 'useColorSchemeMediaQuery'
  | 'useLocalStorage'
>

type ConfigurationOptions = Pick<
  ThemeUiTheme,
  | 'initialColorModeName'
  | 'useBodyStyles'
  | 'useBorderBox'
  | 'useCustomProperties'
  | 'useColorSchemeMediaQuery'
  | 'useLocalStorage'
>

export type CreateDesignSystemOptions = {
  system: System
  global?: any // FIXME: GlobalStyles
  options?: ConfigurationOptions
}

export type GlobalStyleObject = {
  [key: string]: StyleObject
}

export type Theme = ThemeUiTheme & { global?: GlobalStyleObject }
