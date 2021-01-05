import * as React from 'react'
import { render } from 'react-dom'
import { createDesignSystem, ThemeProvider } from 'kodiak-ui'

import App from './App'

const { theme } = createDesignSystem()

const rootElement = document.getElementById('root')
render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement,
)
