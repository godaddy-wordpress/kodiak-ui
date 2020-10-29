import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { jsx, css, Theme, useComponents, useVariants } from '.'

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

export function BaseProvider({
  context,
  children,
}: React.PropsWithChildren<{ context: ContextValue }>) {
  return jsx(
    EmotionContext.Provider,
    { value: context.theme },
    jsx(
      Context.Provider,
      {
        value: context,
      },
      jsx(GlobalStyles),
      children,
    ),
  )
}

export function ThemeProvider({ theme, children }) {
  const variants = useVariants()
  const components = useComponents()

  const context = {
    theme: {
      ...theme,
      ...components,
      ...variants,
    },
  }

  return jsx(BaseProvider, { context }, children)
}
