import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { jsx } from '@theme-ui/core'
import { css, Theme } from '@theme-ui/css'
import { useComponents, useVariants } from '.'

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

interface ContextValue {
  theme: Theme
}

const Context = React.createContext<ContextValue>({
  theme: {},
})

export const useKodiakUi = () => React.useContext(Context)

export function Provider({ theme: base, children }) {
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
    jsx(Context.Provider, {
      value: theme,
      children,
    }),
  )
}
