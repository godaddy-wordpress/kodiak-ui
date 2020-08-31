const breakpoints = ['640px', '768px', '1024px', '1280px']

const space = [0, 4, 8, 12, 16, 24, 32, 40, 64, 128, 256, 512]

const baseColors = {
  black: '#000',
  white: '#fff',
  defaultGray: '#cbd5e1',
  blue: [null, '#ebf6ff', '#bfddf3', '#0076d1', '#0067b6'],
  green: [null, '#dbffe7', '#63db8b', '#379a58'],
  yellow: [null, '#fff9eb', '#ffbe33', '#db9600'],
  red: [null, '#ffe5e5', '#ff8c8c', '#e12f2f', '#c42020'],
  sky: [null, '#f7f9fb', '#e3e9f0', '#cbd5e1', '#b3c2d3'],
  ink: [null, '#1c384e', '#485f6f', '#65778b', '#8694a7'],
  cyan: [null, '#CBF4FB', '#25AFC6', '#0A6E80'],
  magenta: [null, '#FADBE4', '#EB4A83', '#BC1B53'],
  purple: [null, '#E0DCF4', '#8E7DD4', '#6047C2'],
  pink: [null, '#F4DCEB', '#D770B3', '#AF3183'],
  orange: [null, '#FFE8D2', '#D96B30', '#A84F00'],
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

export const colors = {
  ...baseColors,
  grey: baseColors.gray,
  text: baseColors.ink[1],
  background: baseColors.white,
  primary: baseColors.blue[3],
  success: baseColors.green[2],
  warning: baseColors.yellow[2],
  danger: baseColors.red[2],
  muted: baseColors.gray[3],
  highlight: baseColors.blue[2],
}

const commonInputStyles = {
  color: 'gray.8',
  px: 3,
  py: 2,
  fontSize: `100%`,
  borderRadius: `default`,
  border: '1px solid',
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
  stat: {
    color: 'gray.6',
    fontWeight: 'semiBold',
  },
}

const images = {
  avatar: {
    borderRadius: 'full',
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
      backgroundColor: 'cyan.3',
      borderColor: 'cyan.3',
    },
    'input:not(:checked) ~ &': {
      backgroundColor: 'gray.5',
      borderColor: 'gray.5',
    },
    indicator: {
      backgroundColor: 'cyan.4',
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
  bg: 'gray.8',
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
    borderLeftColor: baseColors.red[3],
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

const stats = {
  borderColor: 'gray.2',
  border: '1px solid',
}

const dataVisualizations = {
  stats,
}

const accordions = {
  '& > :not(:last-child)': {
    mb: 4,
  },
  accordionHeader: {
    px: 4,
    py: 5,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    outline: 'none',
    '&:focus-within': {
      bg: 'grey.1',
    },
  },
  accordionItem: {
    border: '1px solid',
    borderColor: 'gray.2',
    borderRadius: 'default',
    maxWidth: '400px',
  },
  accordionBody: {
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'gray.2',
    px: 4,
    py: 5,
  },
  accordionFooter: {
    px: 4,
    py: 5,
  },
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

const tables = {
  border: '1px solid',
  borderColor: 'gray.2',
  borderRadius: 'default',
  fontSize: 1,
  lineHeight: 1.1,
  tableHead: {
    bg: 'gray.1',
    color: 'text',
    fontWeight: 'semiBold',
  },
  tableWrapper: {},
  tableRow: {
    borderBottom: '1px solid',
    borderColor: 'gray.2',
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  tableHeader: {
    borderLeft: '1px solid',
    borderColor: 'gray.2',
    paddingY: 3,
    paddingX: 4,
    width: '150px',
    '&:first-of-type': {
      borderLeft: 'none',
    },
  },
  tableData: {
    borderBottom: 'none',
    borderLeft: '1px solid',
    borderColor: 'gray.2',
    paddingY: 3,
    paddingX: 4,
    width: '150px',
    '&:first-of-type': {
      borderLeft: 'none',
    },
  },
}

const tags = {
  default: {
    bg: 'gray.1',
    border: '1px solid',
    borderColor: 'gray.3',
    color: 'gray.7',
    fontWeight: 'semiBold',
  },
  pill: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.4',
    borderRadius: '15px',
    color: 'gray.5',
    fontWeight: 'semiBold',
  },
  tagButton: {
    bg: 'gray.1',
    borderColor: 'gray.3',
    color: 'gray.7',
    fontWeight: 'semiBold',
  },
  tagLabel: {
    borderColor: 'gray.3',
  },
}

const tooltips = {
  borderColor: 'gray.2',
  "&[data-popper-placement^='top'] > #kodiak-ui-tooltip-arrow::before": {
    borderColor: 'gray.2',
  },
  "&[data-popper-placement^='bottom'] > #kodiak-ui-tooltip-arrow::before": {
    borderColor: 'gray.2',
  },
  "&[data-popper-placement^='right'] > #kodiak-ui-tooltip-arrow::before": {
    borderColor: 'gray.2',
  },
  "&[data-popper-placement^='left'] > #kodiak-ui-tooltip-arrow::before": {
    borderColor: 'gray.2',
  },
}

const skeletonColor = colors.gray[2]
const defaultHighlightColor = colors.gray[1]

const skeletonBase = {
  backgroundColor: skeletonColor,
  backgroundImage: `linear-gradient(
      90deg,
      ${skeletonColor},
      ${defaultHighlightColor},
      ${skeletonColor}
    )`,
  backgroundSize: `200px 100%`,
  backgroundRepeat: `no-repeat`,
  borderRadius: 'default',
  display: 'inline-block',
  lineHeight: 1,
  width: '100%',
}

export const skeletons = {
  ...skeletonBase,
  circle: {
    ...skeletonBase,
    borderRadius: 'full',
    height: '50px',
    width: '50px',
  },
}

const navs = {
  horizontal: {
    display: 'flex',
  },
  horizontalNavItem: {
    color: 'gray.6',
    cursor: 'pointer',
    lineHeight: '1.3',
    position: 'relative',
    p: 4,
    '::after': {
      bg: 'gray.6',
      bottom: '0',
      content: '""',
      left: '0',
      height: '1px',
      position: 'absolute',
      right: '0',
      width: '100%',
    },
  },
  navItem: {
    color: 'blue.3',
    textDecoration: 'none',
  },
}

const progresses = {
  container: {
    bg: 'gray.2',
    borderRadius: '5px',
  },
  bar: {
    borderRadius: '5px',
  },
}

const paginations = {
  borderColor: 'gray.3',
  button: {
    borderColor: 'gray.3',
    ':disabled': {
      bg: 'gray.2',
      boxShadow: 'none',
      color: 'gray.4',
      cursor: 'not-allowed',
    },
  },
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
    semiBold: 600,
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
  avatar: {
    borderRadius: 'full',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labels,
  images,
  inputs,
  shadows,
  forms,
  dialogs,
  messages,
  bannerMessages,
  buttons,
  selects,
  skeletons,
  accordions,
  tables,
  tags,
  tooltips,
  navs,
  progresses,
  paginations,
  dataVisualizations,
} as const
