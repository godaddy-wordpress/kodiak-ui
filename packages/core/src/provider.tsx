import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { css } from 'theme-ui'
import { jsx, useKodiakStore } from '.'
import { KodiakState, Theme } from './types'

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
  theme: Theme
  children?: React.ReactNode
}

const variantsSelector = (state: KodiakState) => state.variants
const componentsSelector = (state: KodiakState) => state.components

export interface ContextValue {
  theme: Theme
}

export const Context = React.createContext<ContextValue>({
  theme: {},
})

export const useKodiakUi = () => React.useContext(Context)

export function Provider({ theme: base, children }: ProviderProps) {
  const variants = useKodiakStore(variantsSelector)
  const components = useKodiakStore(componentsSelector)

  const global = base?.global

  const theme = {
    ...base,
    ...variants,
    ...components,
  }

  return jsx(
    EmotionContext.Provider,
    { value: theme },
    jsx(GlobalStyles, { global }),
    jsx(Context.Provider, {
      value: theme,
      children,
    }),
  )
}
