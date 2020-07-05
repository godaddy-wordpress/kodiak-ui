---
id: themeing
title: Themeing
sidebar_label: Themeing
---

While you can use Kodiak UI without creating a theme for your application, it is highly recommended that you do not. One of the biggest benefits of working with Kodiak UI is that it is built on the idea of your application having a theme which adheres to a standard Theme Specification and pushes forward constraint-based design principles.

## Creating a theme

To start creating your theme, create a `theme.(js|ts)` file and pass it into the `ThemeProvider` component provided by Theme UI in the root component of your app.

```tsx
// App.ts
import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

return App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
```

Your theme file will export an object that contains all of the common style properties for your application and variants for styling all of the components in Kodiak UI.

```ts
// example base theme from @theme-ui/presets
export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
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
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
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
```

All theme properties are accessible in the `sx` prop that every Kodiak UI component accepts and is what is used to style your application.

```tsx
<Box sx={{ bg: 'background' }}>
  <Link sx={{ color: 'primary' }}>Click me!</Link>
</Box>
```

In the above example `background` and `primary` will render with the appropriate `hex` code values that are set in the theme.

To learn more about themeing, please read the [Theme UI documentation](https://theme-ui.com/theming). Kodiak UI does not customize or do anything differently from Theme UI in regards to themeing and thus Theme UI should be your primary source of truth when questions arise.
