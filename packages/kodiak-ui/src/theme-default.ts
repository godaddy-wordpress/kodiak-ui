import { Theme } from '.'

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
    sans:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    serif: 'inherit',
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
    light: 300,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
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
    full: '9999px',
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
  },
}

export default theme
