---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

## Installation

Kodiak UI is a family of libraries that work together to allow you to build UIs with React. To get started with the basics, we recommend installing the `@kodiak-ui/primitives` and `@kodiak-ui/hooks` packages as they will be the most used library.

```bash
// with yarn
yarn add kodiak-ui @kodiak-ui/primitives

// with npm
npm install kodiak-ui @kodiak-ui/primitives
```

First thing to do is set up your design system by calling `createDesignSystem`. Kodiak UI provides a default theme to work with and makes it really easy to customize for your UI.

`createDesignSystem` will return a `theme` to be passed to the `Provider`. This will allow all theme properties to be accessible by any Kodiak UI component or any `sx` prop that is in use with the `jsx` pragma.

```tsx
import { createDesignSystem, Provider } from 'kodiak-ui'
import { Box } from '@kodiak-ui/primitives'

const { theme } = createDesignSystem({
  system: {
    space: [0, 4, 8, 12, 16, 24, 32, 40],
  },
})

function App() {
  return (
    <Provider theme={theme}>
      <Box sx={{ p: 4 }}>App goes here</Box>
    </Provider>
  )
}
```

### Peer dependencies

Kodiak UI requires the following libraries to be installed along with it:

- `react` at versions 16.8.0 or higher
- `react-dom` at versions 16.8.0 or higher

## Typescript

Kodiak UI is built with Typescript and provides types for all components and hooks. You will still need to add types for peer dependencies if they are available.
