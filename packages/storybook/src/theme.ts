const breakpoints = ['640px', '768px', '1024px', '1280px']

const baseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  defaultGray: '#cbd5e1',
  blue: [null, '#0067b6', '#0076d1', '#bfddf3', '#ebf6ff'],
  green: [null, '#379a58', '#63db8b', '#dbffe7'],
  yellow: [null, '#db9600', '#ffbe33', '#fff9eb'],
  red: [null, '#c42020', '#e12f2f', '#ff8c8c', '#ffe5e5'],
  sky: [null, '#f7f9fb', '#e3e9f0', '#cbd5e1', '#b3c2d3'],
  ink: [null, '#1c384e', '#485f6f', '#65778b', '#8694a7'],
  gray: [
    null,
    '#f7f9fb', // sky1
    '#e3e9f0', // sky2
    '#cbd5e1', // sky3
    '#b3c2d3', // sky4
    '#8694a7', // ink4
    '#65778b', // ink3
    '#485f6f', // ink2
    '#1c384e', // ink1
  ],
}

const colors = {
  text: baseColors.ink[1],
  background: baseColors.white,
  primary: baseColors.blue[2],
  success: baseColors.green[2],
  warning: baseColors.yellow[2],
  danger: baseColors.red[2],
  highlight: baseColors.blue[3],
  ...baseColors,
  grey: baseColors.gray,
}

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  appearance: `none`,
  lineHeight: `tight`,
}

const labels = {
  default: {
    mb: 2,
    fontWeight: 'bold',
    color: 'gray.8',
  },
  inline: {
    mb: 0,
    mr: 2,
    fontWeight: 'bold',
    color: 'gray.8',
    display: 'block',
    textAlign: 'right',
  },
}

const inputs = {
  shadow: {
    ...commonInputStyles,
    border: `none`,
    color: `gray.7`,
    boxShadow: `default`,
    '&:focus': {
      outline: `none`,
      boxShadow: `outline`,
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: `gray.2`,
    borderWidth: `2px`,
    borderStyle: `solid`,
    borderColor: `gray.2`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: `transparent`,
    border: `none`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primary`,
    borderRadius: `0px`,
    color: `gray.7`,
    '&:focus': {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
}

const forms = {
  radio: {
    mr: 8,
  },
}

export const theme = {
  breakpoints,
  colors,
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
    ...labels.default,
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
      bg: 'transparent',
      border: '1px solid',
      borderColor: baseColors.ink[4],
      color: baseColors.ink[1],
    },
  },
  links: {
    a: {
      fontFamily: 'body',
    },
  },
  forms,
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
      borderBottomWidth: 1,
      borderBottomColor: 'grey.2',
      padding: 2,
      backgroundColor: 'grey.0',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: 'grey.1',
      padding: 2,
    },
  },
  labels,
  inputs,
}
