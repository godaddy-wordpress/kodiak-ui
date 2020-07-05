---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

## Installation

Kodiak UI is a family of libraries that work together to allow you to build UIs with React. To get started with the basics, we recommend installing the `@kodiak-ui/primitives` and `@kodiak-ui/hooks` packages as they will be the most used library.

```bash
// with yarn
yarn add theme-ui @kodiak-ui/primitives @kodiak-ui/hooks

// with npm
npm install theme-ui @kodiak-ui/primitives @kodiak-ui/hooks
```

You can now import the Kodiak UI primitive components into your application:

```tsx
import { Box } from '@kodiak-ui/primitives'
```

### Peer dependencies

Kodiak UI requires the following libraries to be installed along with it:

- `theme-ui` at version 0.3.1 or higher
- `react` at versions 16.8.0 or higher
- `react-dom` at versions 16.8.0 or higher

## Typescript

Kodiak UI is built with Typescript and provides types for all components and hooks. You will still need to add types for peer dependencies if they are available.
