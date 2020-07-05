---
id: sx-prop
title: sx prop
sidebar_label: sx prop
---

One of the reasons why Kodiak UI is built on top of Theme UI is the `sx` prop and just like themeing, Kodiak UI does not customize the `sx` prop or change anything from Theme UI. Please refer to the [documentation](https://theme-ui.com/sx-prop) for the `sx` prop at Theme UI.

All Kodiak UI components accept the `sx` prop and is the primary way to provide one-off styling to the components. `sx` can also be used to style all primitive HTML elements when utilizing the `jsx` pragma that is provided by Theme UI. With `sx` you can provide any valid CSS to an element and utilize values from your theme to ensure consistency and that you are utilizing constraint-based design principles when styling your application.

Make sure to take a look through all of the [theme-aware properties](https://theme-ui.com/sx-prop#theme-aware-properties) provided by Theme UI.

```tsx
import { Box } from '@kodiak-ui/primitives'

export function App(props) {
  return (
    <Box
      {...props}
      sx={{
        // values referencing scales defined in a theme
        color: 'primary',
        bg: 'lightgray',
        fontFamily: 'body',
        // raw CSS value
        boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
      }}
    />
  )
}
```

## Responsive styling

Just like the `sx` prop all responsive styles are applied inline to your element. Theme UI provides a concise way to write mobile-first styles using arrays. You no longer have to write verbose media queries, even though they are supported by Theme UI. Kodiak UI recommends that you always use the array syntax when applying responsive styles to your application.

```tsx
import { Box } from '@kodiak-ui/primitives'

export function App(props) {
  return (
    <Box
      {...props}
      sx={{
        width: ['100%', '50%', '25%'],
      }}
    />
  )
}
```

The above code will render a `div` at 100% width on mobile screens, 50% when the viewport is `52em`s or larger, and 25% at `64em` or larger.

## Recommendations

There are a few styling approaches that we recommend when working with the `sx` prop and Kodiak UI.

1. Keep `sx` as the last prop for easier reading and parsing of the codebase
2. When applying the same grouping of styles repeatedly to Kodiak UI components move them
   into a variant defined in the theme
3. Utilize the shorthand properties for adding background, and spacing: `bg`, `m`, `p` and more.
