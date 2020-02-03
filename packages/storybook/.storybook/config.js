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

// The context isn't properly injected when rendering as {StoryFn()}
// https://github.com/storybookjs/storybook/issues/9300
// https://github.com/storybookjs/storybook/issues/8531
addDecorator((StoryFn, context) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryFn
        id={context.id}
        name={context.name}
        parameters={context.parameters}
        kind={context.kind}
      />
    </ThemeProvider>
  )
})

configure(req, module)
