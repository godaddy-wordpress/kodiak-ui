import * as React from 'react'
import { createDesignSystem, ThemeProvider } from 'kodiak-ui'
import { theme as system } from '../src/theme'

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const { theme } = createDesignSystem({
  system,
  variants: {
    shadow: {
      bg: 'transparent',
      color: 'text',
      border: 'none',
      boxShadow: 'none',
      p: 0,
      m: 0,
      '&:hover': {
        bg: 'transparent',
        color: 'text',
      }
    },
  },
})

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
