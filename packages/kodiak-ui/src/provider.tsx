import * as React from 'react'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { css, merge, jsx, useStore, Theme } from '.'
import { toCustomProperties, createColorStyles } from './custom-properties'
import { applyMode } from './color-mode'
import { ThemeUIStyleObject } from './types'

const GlobalStyles = ({ global }: { global: ThemeUIStyleObject }) =>
  jsx(Global, {
    styles: (emotionTheme: any): any => {
      const theme = emotionTheme as Theme
      const colorStyles = createColorStyles(theme)

      return css({
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

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme
  children: React.ReactNode
}) {
  const mode = useStore(state => state.mode)
  const components = useStore(state => state.components)
  const variants = useStore(state => state.variants)

  const themeWithMode = applyMode(mode)(theme)
  const componentsAndVariants = {
    ...(components ? components : {}),
    ...(variants ? variants : {}),
  }

  const mergedTheme = merge.all(themeWithMode, componentsAndVariants)

  const context = {
    theme: mergedTheme,
  }

  return jsx(BaseProvider, { context }, children)
}
