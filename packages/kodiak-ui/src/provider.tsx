import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { jsx, css, Theme, useComponents, useVariants } from '.'
import { toCustomProperties, createColorStyles } from './custom-properties'

const GlobalStyles = ({ global }) =>
  jsx(Global, {
    styles: (emotionTheme: Theme) => {
      const theme = emotionTheme as Theme
      const colorStyles = createColorStyles(theme)

      return css({
        '*': {
          boxSizing: 'border-box',
        },
        ...colorStyles,
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
  const { theme } = context
  theme.colors = toCustomProperties(theme.colors, 'colors')

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
