import * as React from 'react'
import { createDesignSystem, Provider as ThemeProvider } from 'kodiak-ui'
// import { ThemeProvider } from 'theme-ui'
// import { theme } from '../src/theme'

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const { theme } = createDesignSystem()

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
