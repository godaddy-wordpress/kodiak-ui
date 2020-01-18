import { configure } from '@storybook/react'

const req = require.context('../src', true, /.stories.(ts|js)x?$/)

configure(req, module)
