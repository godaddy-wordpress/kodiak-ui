import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/react'
import { css, jsx, useKodiakStore, Theme } from '.'
import { toCustomProperties, createColorStyles } from './custom-properties'
import { applyMode } from './color-mode'

const GlobalStyles = ({ global }) =>
  jsx(Global, {
    styles: (emotionTheme: Theme): any => {
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
      jsx(GlobalStyles, { global: theme.global }),
      children,
    ),
  )
}

export function ThemeProvider({ theme, children }) {
  const { mode, components, variants } = useKodiakStore()

  const mergedTheme = applyMode(mode)(theme)

  const context = {
    theme: {
      ...mergedTheme,
      ...components,
      ...variants,
    },
  }

  return jsx(BaseProvider, { context }, children)
}
