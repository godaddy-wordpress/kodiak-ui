---
id: components
title: Components API
sidebar_label: Components API
---

Styling and rendering components in an easy and effective manner is at the core of Kodiak's purpose. So many component libraries make it difficult to overwrite base styles for components or hard to augment styling for different modifications. Kodiak's `component` API helps mitigate a number of these issues. It is similar to the `variant` API to help keep consistency on how to apply styling for components across an entire application.

The majority of the base/default styling for each Kodiak UI component should be applied via the `component` API.

## Getting started

```tsx
import { component } from 'kodiak-ui'
import * as Primitives from '@kodiak-ui/primitives'

component('button', {
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 'default',
  '&:hover': {
    bg: 'secondary',
  },
})

function ButtonLink(props) {
  return <Primitives.Button {...props} />
}
```

Similar to the `variant` API, the `component` API provides a way to define a common set of styles that can be shared across components. They are in essence the same API and can be used interchangeably, but the `component` API is meant to be used in more of a specific use case and contain more CSS than variants.

Each Kodiak UI component will automatically check to see if a `component` has been added based on the name of the component. To apply styles automatically, pass in the camelcased version of the component name as the first argument to `component`.

For example, to style the `AccordionHeader` component, call `component('accordionHeader', {})`.

Components can also be composed together similar to variants. If you wanted to create a separate `Button` component that was styled like an `AnchorButton` but did not render an `a` tag, you could do the following:

```tsx
import { component } from 'kodiak-ui'
import * as Primitives from '@kodiak-ui/primitives'

component('button', {
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 'default',
  '&:hover': {
    bg: 'secondary',
  },
})

component('link', {
  textDecoration: 'underline',
})

function ButtonLink(props) {
  return <Primitives.Button base={['button', 'link']} {...props} />
}
```

We recommend colocating these default component style definitions as closely to where they are used, and move shared `component`s up a level similar to how you would manage state in an application.

## API

### component

The `component` method follows the same API as the `variant` method and allows you to apply default styles to any Kodiak UI components. The main difference is that Kodiak UI components will automatically check the theme for a style definition based on the component name.

```ts
component('key', { bg: 'primary', px: 4 })
```

| Argument | Type   | Description                                                                      |
| -------- | ------ | -------------------------------------------------------------------------------- |
| key      | string | The name of the component and how you will reference the styles in the base prop |
| styles   | object | Theme scoped style object. The styles that will be applied to the component      |

💡**Tip**: See the alternate way to define components [below](#defining-components-globally).

### base prop

All Kodiak UI components accept a `base` prop which will take a string or array of strings as a value. The component(s) passed into the `base` prop will apply the appropriate styling to the component. A Kodiak UI component will automatically check for a `component` defined in the theme. It will look to see if there a component in the theme with the same name as the component, only camelcased.

```
Button => button
AccordionItem => accordionItem
```

```tsx
<Button base="linkButton">Click me!</Button>

// Automatically styled if a `button` component has been defined
<Button>Click me!</Button>

// Compose multiple components togther for more specific use-case versions of Kodiak's primitives
<Button base={['button', 'link']}>Click me!</Button>
```

### useComponent

The `useComponent` hook allows you to get the styles for a specified component outside of the normal parent -> child hierarchy. The hook accepts a component as the only argument and will return the styles from the theme that can be passed into the `sx` prop in any of Kodiak UI's components.

| Argument  | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| component | { key: string, styles: object } |             |

```ts
import { button } from './some-other-file'

function App() {
  const styles = useComponent(button)

  return <Box sx={{ ...styles }}>Stuff</Box>
}
```

### useComponents

The `useComponents` hook will return all currently defined variants in the theme.

🚨 **Note:** If you define a `component` in a React component that is not currently being rendered, it will not have been injected into the theme at this point and thus will not be returned by `useComponents`.

```ts
const components = useComponents()
```

## Defining components globally

If you would prefer to define your components in one single place, you can pass them into the optional `components` object when intializing Kodiak UI.

```ts
const { theme } = createDesignSystem({
  components: {
    button: { // styles },
    link: { // styles },
  }
})
```

Both `button` and `link` base styles will be available to all components and can be passed into the `base` prop for any Kodiak UI component.
