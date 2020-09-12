import { Theme } from './'

const breakpoints = ['40em', '56em', '64em']

export const theme: Theme & { global: any } = {
  breakpoints,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: ['0', '1rem', '1.1rem', '1.2rem', '1.5rem', '2rem', '3rem'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  global: {
    html: {
      fontFamily: 'body',
      fontSize: '100%',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    body: {
      margin: 0,
      padding: 0,
    },
    h1: {
      fontSize: [
        '2.25rem',
        'calc(2.25rem + (((100vw - 20rem) / (90 - 20))) * (4.75 - 2.25))',
        '4.75rem',
      ],
    },
  },
}

export default theme
