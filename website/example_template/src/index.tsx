import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@kodiak-ui/theme'

import App from './App'

const rootElement = document.getElementById('root')
render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement,
)
