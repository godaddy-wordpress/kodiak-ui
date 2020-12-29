import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/react'
import { css, merge, jsx, useKodiakStore, Theme } from '.'
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
  scope?: string
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
  const { scope, theme } = context
  theme.colors = toCustomProperties(theme.colors, 'colors')

  console.log(scope)

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

export function ThemeProvider({ scope, theme, children }) {
  const { mode, components, variants } = useKodiakStore()

  const themeWithMode = applyMode(mode)(theme)
  const componentsAndVariants = {
    ...(components ? components : {}),
    ...(variants ? variants : {}),
  }

  const mergedTheme = merge.all(themeWithMode, componentsAndVariants)

  const context = {
    scope,
    theme: mergedTheme,
  }

  return jsx(BaseProvider, { context }, children)
}
