import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { css } from '@theme-ui/css'
import { jsx, useVariants } from '.'
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

export interface ContextValue {
  theme: Theme
}

export const Context = React.createContext<ContextValue>({
  theme: {},
})

export const useKodiakUi = () => React.useContext(Context)

interface BaseProviderProps {
  context: ContextValue
}
const BaseProvider: React.FC<BaseProviderProps> = ({ context, children }) =>
  jsx(
    EmotionContext.Provider,
    { value: context.theme },
    jsx(Context.Provider, {
      value: context,
      children,
    }),
  )

export function Provider({ theme: base, children }: ProviderProps) {
  const variants = useVariants()
  // const components = useKodiakStore(componentsSelector)

  // const global = base?.global

  const theme = {
    ...base,
    ...variants,
    // ...components,
  }

  return jsx(
    EmotionContext.Provider,
    { value: theme },
    jsx(
      Context.Provider,
      {
        value: theme,
      },
      jsx(GlobalStyles, { global }),
      children,
    ),
  )
}
