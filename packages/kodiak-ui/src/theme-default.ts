import { Theme } from './types'

const breakpoints = ['40em', '56em', '64em']

export const theme: Theme = {
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
  fontSizes: [
    '0.75rem', // 0 => 12px
    '0.875rem', // 1 => 14px
    '1rem', // 2 => 16px
    '1.25rem', // 3 => 20px
    '1.5rem', //  4 => 24px
    '2rem', // 5 => 32px
    '2.5rem', // 6 => 40px
    '3rem', // 7 => 48px
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.5,
  },
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  radii: {
    default: '4px',
    sm: '2px',
    md: '4px',
    lg: '6px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
  global: {
    body: {
      fontFamily: 'body',
      fontSize: '100%',
      fontWeight: 'body',
      lineHeight: 'body',
      margin: 0,
      padding: 0,
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      variant: 'text.body',
    },
    a: {
      variant: 'text.body',
      color: 'primary',
    },
  },
}

export default theme
