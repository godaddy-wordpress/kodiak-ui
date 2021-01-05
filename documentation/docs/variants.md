---
id: variants
title: Variants API
sidebar_label: Variants API
---

Variants with Kodiak UI are a powerful feature and provide the ability to compose your component styles in a miriad of ways. Variants are first-class citizens in Kodiak UI and can and should be used often when composing your UI. The variants API was heavily inspired by the [Recoil](https://recoiljs.org/) and [Jotai](https://jotai.surge.sh/) APIs for state management.

For those of you coming from a Sass or CSS pre-processor background, it might be helpful to think of variants as mixins. They are a grouping of styles that can be applied to any Kodiak UI component to modify and augment the current styling of a component.

## Getting started

```tsx
import { variant } from 'kodiak-ui'
import { Button } from '@kodiak-ui/primitives'

variant('seconday', {
  bg: 'white',
  border: '1px solid',
  borderColor: 'black',
  color: 'black',
  '&:hover': {
    bg: 'black',
    color: 'white',
  },
})

variant('lg', {
  px: 4,
  py: 3,
})

function App() {
  return (
    <>
      <Button>Click me!</Button>
      <Button variants={['secondary', 'lg']}>Maybe click me</Button>
    </>
  )
}
```

As you can see, defining a new variant is as easy as calling `variant` with a key and style object. The style object is theme aware, so you can use all of the goodness that Kodiak UI provides with scaled theme properties for spacing, fonts, radii, etc...

Each variant is stored in a global store that can be accessed from any component in your application no matter where `variant` is called. We recommend that you think about variants in a similar way to approaching state. Typically state is a top -> down approach and co-located to where the state is used. Variants should be defined in the same way. Define your variants initially in a top down approach and co-locate them to where they are going to be used. If you need to use them in another area of your application, move the variant definitions up the tree.

If you do need to utilize a variant in a parent that is defined in a child component, the `useVariant` hook can be applied.

```tsx
import { useVariant } from 'kodiak-ui'
import { secondaryVariant } from './some-other-file'

function Parent() {
  const secondary = useVariant(secondaryVariant)

  return <Button sx={{ ...secondary }} />
}
```

## API

Kodiak UI's main ways of working with variants.

### variant

The `variant` method allows you to define variants that are then injected into your theme from anywhere in your application.

```ts
variant('key', { bg: 'primary', px: 4 })
```

| Argument | Type   | Description                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------ |
| key      | string | The name of the variant and how you will reference the variant in the component prop |
| styles   | object | Theme scoped style object. The styles that will be applied to the component          |

💡**Tip**: See the alternate way to define variants [below](#defining-variants-globally).

### variants prop

All Kodiak UI components accept a `variants` prop which will take a string or array of strings as a value. The variant(s) passed into the `variants` prop will apply the appropriate styling to the component.

```tsx
<Button variants="secondary">Click me!</Button>
<Button variants={['secondary', 'lg']}>Click me!</Button>
```

### useVariant

The `useVariant` hook allows you to get the styles for a specified variant outside of the normal parent -> child hierarchy. The hook accepts a variant as the only argument and will return the styles from the theme that can be passed into the `sx` prop in any of Kodiak UI's components.

| Argument | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| variant  | { key: string, styles: object } |             |

```ts
import { secondary } from './some-other-file'

function App() {
  const styles = useVariant(secondary)

  return <Box sx={{ ...styles }}>Stuff</Box>
}
```

### useVariants

The `useVariants` hook will return all currently defined variants in the theme.

🚨 **Note:** If you define a variant in a component that is not currently being rendered, it will not have been injected into the theme at this point and thus will not be returned by `useVariants`.

```ts
const variants = useVariants()
```

## Defining variants globally

If you would prefer to define your variants in the theme in one single place, you can pass them into the optional `variants` object when intializing Kodiak UI.

```ts
const { theme } = createDesignSystem({
  variants: {
    secondary: { // styles },
    lg: { // styles },
  }
})
```

Both `secondary` and `lg` variants will be available to all components and can be passed into the `variants` prop for any Kodiak UI component.
