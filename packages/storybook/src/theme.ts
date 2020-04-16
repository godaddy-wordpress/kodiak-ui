const breakpoints = ['640px', '768px', '1024px', '1280px']

const space = [0, 4, 8, 12, 16, 24, 32, 40, 64, 128, 256, 512]

const baseColors = {
  black: '#000',
  white: '#fff',
  defaultGray: '#cbd5e1',
  blue: [null, '#0067b6', '#0076d1', '#bfddf3', '#ebf6ff'],
  green: [null, '#379a58', '#63db8b', '#dbffe7'],
  yellow: [null, '#db9600', '#ffbe33', '#fff9eb'],
  red: [null, '#c42020', '#e12f2f', '#ff8c8c', '#ffe5e5'],
  sky: [null, '#f7f9fb', '#e3e9f0', '#cbd5e1', '#b3c2d3'],
  ink: [null, '#1c384e', '#485f6f', '#65778b', '#8694a7'],
  cyan: [null, '#cbf4fb', '#25afc6', '#0a6e80'],
  magenta: [null, '#fadbe4', '#eb4a83', '#bc1b53'],
  purple: [null, '#e0dcf4', '#8e7dd4', '#6047c2'],
  pink: [null, '#f4dceb', '#d770b3', '#af3183'],
  orange: [null, '#ffe8d2', '#d96b30', '#a84f00'],
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
  transparent: 'transparent',
}

const colors = {
  ...baseColors,
  grey: baseColors.gray,
  text: baseColors.ink[1],
  background: baseColors.white,
  primary: baseColors.blue[2],
  success: baseColors.green[2],
  warning: baseColors.yellow[2],
  danger: baseColors.red[2],
  muted: baseColors.gray[3],
  highlight: baseColors.blue[3],
}

const commonInputStyles = {
  color: 'gray.8',
  px: 3,
  py: 2,
  fontSize: `100%`,
  borderRadius: `default`,
  borderColor: 'gray.3',
  appearance: `none`,
  lineHeight: `tight`,
  '&:focus': {
    borderColor: 'primary',
    outline: 'none',
  },
}

const labels = {
  mb: 2,
  fontWeight: 'bold',
  color: 'gray.8',
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
  ...commonInputStyles,
  shadow: {
    ...commonInputStyles,
    border: 'none',
    color: 'gray.7',
    boxShadow: 'none',
    '&:focus': {
      outline: 'none',
      boxShadow: 'outline',
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
    '&::placeholder': {
      color: 'gray.5',
    },
  },
  disabled: {
    ...commonInputStyles,
    borderColor: 'gray.2',
    color: 'gray.5',
  },
}

const forms = {
  radio: {
    mr: 2,
  },
  checkbox: {
    mr: 2,
  },
  select: {
    color: 'black',
    borderColor: 'gray.3',
  },
  switch: {
    indicator: {
      backgroundColor: 'background',
    },
  },
  alternateSwitch: {
    borderRadius: '2px',
    'input:checked ~ &': {
      backgroundColor: 'red.4',
      borderColor: 'red.4',
    },
    'input:not(:checked) ~ &': {
      backgroundColor: 'gray.5',
      borderColor: 'gray.5',
    },
    indicator: {
      backgroundColor: 'red.1',
    },
  },
}

const dialogs = {
  borderRadius: 'default',
  bg: 'white',
  dialogHeader: {},
  dialogHeaderCloseIcon: { color: 'gray.5' },
  dialogContent: {},
  dialogFooter: {},
  fullWidth: {
    margin: '5vh',
    width: 'calc(100% - 10vh)',
    height: 'calc(100% - 10vh)',
  },
  overlay: {
    background: 'hsla(0, 0%, 0%, 0.5)',
  },
  blurred: {
    backdropFilter: 'blur(2px)',
    background: 'rgba(0,0,0,0.6)',
  },
}

const baseMessageStyles = {
  bg: baseColors.gray[8],
  color: baseColors.white,
  fontSize: 1,
}

const messages = {
  ...baseMessageStyles,
  warning: {
    ...baseMessageStyles,
    borderLeftColor: baseColors.yellow[2],
  },
  danger: {
    ...baseMessageStyles,
    borderLeftColor: baseColors.red[2],
  },
}

const baseBannerMessageStyles = {
  ...baseMessageStyles,
  borderRadius: '0',
  borderColor: 'primary',
  borderStyle: 'solid',
  borderWidth: '2px',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '14px', // Need to come up with something better here that is based on the scale
  minHeight: 48,
  maxHeight: 48,
  textAlign: 'center',
  maxWidth: '100%',
}

const bannerMessages = {
  ...baseBannerMessageStyles,
  warning: {
    ...baseBannerMessageStyles,
    borderColor: baseColors.yellow[2],
  },
  danger: {
    ...baseBannerMessageStyles,
    borderColor: baseColors.red[2],
  },
}

const buttons = {
  secondary: {
    bg: 'transparent',
    border: '1px solid',
    borderColor: baseColors.ink[4],
    color: baseColors.ink[1],
  },
  shadow: {
    bg: 'transparent',
    borderColor: 'none',
    color: baseColors.ink[1],
    padding: '0',
    border: 'none',
  },
}

const accordions = {
  accordionHeader: {},
  accordionBody: {},
  accordionFooter: {},
}

const selects = {
  selectMenu: {
    top: `calc(100% + ${space[2]}px)`,
  },
}

// Tailwind shadows
const shadows = {
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,.06) !important',
  'shadow-xs': '0 0 0 1px rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
}

export const theme = {
  breakpoints,
  colors,
  space,
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 13, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    medium: 500,
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
    full: '9999px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      mt: 0,
    },
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
      borderBottomWidth: 1,
      borderBottomColor: 'gray.2',
      padding: 2,
      backgroundColor: 'gray.0',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: 'gray.1',
      padding: 2,
    },
  },
  labels,
  inputs,
  shadows,
  forms,
  dialogs,
  messages,
  bannerMessages,
  buttons,
  menuitem: {
    color: 'blue.2',
    textDecoration: 'none',
  },
  selects,
  accordions,
}
