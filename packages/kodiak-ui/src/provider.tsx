import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { css } from '@theme-ui/css'
import { Theme } from './types'
import { jsx, useComponents, useVariants } from '.'

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

export function Provider({ theme: base, children }: ProviderProps) {
  const variants = useVariants()
  const components = useComponents()

  const global = base?.global

  const theme = {
    ...base,
    ...variants,
    ...components,
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
