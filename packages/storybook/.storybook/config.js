import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/theme'

const req = require.context('../src', true, /.stories.(ts|js)x?$/)

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(req, module)
