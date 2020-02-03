export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 12, 16, 24, 32, 40, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    grey: [
      '#f7f9fb', // sky1
      '#e3e9f0', // sky2
      '#cbd5e1', // sky3
      '#b3c2d3', // sky4
      '#8694a7', // ink4
      '#65778b', // ink3
      '#485f6f', // ink2
      '#1c384e', // ink1
    ],
  },
  sizes: {
    main: '60%',
    aside: '25%',
  },
  radii: {
    none: '0',
    default: '4px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
  },
  label: {
    color: 'text',
    fontWeight: 'bold',
  },
  layout: {
    container: {
      flexDirection: 'column',
    },
    root: {
      minHeight: '800px',
      justifyContent: 'space-between',
    },
    header: {
      color: 'white',
      bg: 'primary',
      p: 4,
    },
    main: {
      maxWidth: 'main',
      m: 4,
      width: '100%',
      p: 4,
    },
    aside: {
      maxWidth: 'aside',
      m: 4,
      width: '100%',
      bg: 'muted',
      p: 2,
    },
    footer: {
      color: 'white',
      bg: 'secondary',
      p: 4,
    },
  },
  buttons: {
    secondary: {
      bg: 'secondary',
      '&:hover': {
        bg: 'primary',
      },
    },
  },
  links: {
    a: {
      fontFamily: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
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
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}
