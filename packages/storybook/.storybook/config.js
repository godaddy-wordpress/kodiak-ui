import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/theme'

const req = require.context('../src', true, /.stories.(ts|js)x?$/)

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(req, module)
