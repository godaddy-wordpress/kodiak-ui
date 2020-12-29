import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/react'
import { css, merge, jsx, useKodiakStore, Theme } from '.'
import { toCustomProperties, createColorStyles } from './custom-properties'
import { applyMode } from './color-mode'

const GlobalStyles = ({ scope, global }) =>
  jsx(Global, {
    styles: (emotionTheme: Theme): any => {
      const theme = emotionTheme as Theme
      const colorStyles = createColorStyles(theme)

      const globalStyles = scope
        ? Object.keys(global)?.reduce((acc, curr) => {
            const scopeKey =
              curr === '*' || curr === 'body' ? scope : `${scope} ${curr}`
            return {
              ...acc,
              [scopeKey]: global?.[curr],
            }
          }, {})
        : global

      return css({
        '*': {
          boxSizing: 'border-box',
        },
        ...colorStyles,
        ...globalStyles,
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

  return jsx(
    EmotionContext.Provider,
    { value: context.theme },
    jsx(
      Context.Provider,
      {
        value: context,
      },
      jsx(GlobalStyles, { scope, global: theme.global }),
      children,
    ),
  )
}

export function ThemeProvider({
  scope,
  theme,
  children,
}: {
  scope?: string
  theme: Theme
  children: React.ReactNode
}) {
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
