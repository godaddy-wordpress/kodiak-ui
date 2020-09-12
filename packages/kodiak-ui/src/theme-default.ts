import { Theme } from 'theme-ui'

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
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
    },
  },
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
      variant: 'text.heading',
      fontSize: 'clamp(1.5rem, 1.5rem + 2vw, 2rem)', // min of 20px on small screens and max of 32 px on large screens
    },
    h2: {
      variant: 'text.heading',
      fontSize: 'clamp(1.25rem, 1.25rem + 2vw, 1.5rem)',
    },
  },
}

export default theme
