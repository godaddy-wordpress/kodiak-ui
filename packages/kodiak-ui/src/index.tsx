import * as React from 'react'
import { jsx as emotion, Global, InterpolationWithTheme } from '@emotion/core'
import { ThemeProvider } from '@kodiak-ui/core'
import { css, ThemeUiStyleObject as StyleObject } from '@theme-ui/css'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import themeDefault from './theme-default'
import {
  CreateDesignSystemOptions,
  GlobalStyles,
  KodiakState,
  Theme,
} from './types'
import './react-jsx'

export const Store = createVanilla<KodiakState>(set => ({
  variants: null,
  components: null,
  variant: (key: string, styles: StyleObject) =>
    set((state: KodiakState) => ({
      variants: { ...state.variants, [key]: styles },
    })),
  component: (key: string, styles: StyleObject) =>
    set((state: KodiakState) => ({
      components: { ...state.components, [key]: styles },
    })),
}))

const variantsSelector = (state: KodiakState) => state.variants
const componentsSelector = (state: KodiakState) => state.components

export const variant = Store.getState().variant
export const component = Store.getState().component

export const useKodiakStore = create(Store)

export function useVariant() {}

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
    styles: (emotionTheme: Theme) => {
      const theme = emotionTheme as Theme

      return css({
        '*': {
          boxSizing: 'border-box',
        },
        ...global,
      })(theme)
    },
  })

interface ProviderProps {
  theme: Theme & { global: GlobalStyles }
  children?: React.ReactNode
}

export function Provider({ theme: base, children }: ProviderProps) {
  const variants = useKodiakStore(variantsSelector)
  const components = useKodiakStore(componentsSelector)

  const global = base?.global

  const theme = {
    ...base,
    ...variants,
    ...components,
  }

  return jsx(ThemeProvider, { theme }, jsx(GlobalStyles, { global }), children)
}
