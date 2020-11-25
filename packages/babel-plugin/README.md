# @kodiak-ui/babel-plugin

A babel plugin that hoists jsx attributes.

`@kodiak-ui/babel-plugin` is used to optimize `sx` attributes by hoisting anything that could be out of the render path.

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

Without options:

```json
{
  "plugins": ["@kodiak-ui"]
}
```

With options:

_Defaults Shown_

```js
{
  "plugins": [
    [
      "@kodiak-ui",
      {
          attributesToHoist: ["sx", "variants"]
      }
    ]
  ]
}
```

## Options

### `attributesToHoist`

An array of jsx attributes to hoist.

## Sample

```tsx
// Input
import { Box } from '@kodiak-ui/primitives'

function sxGenerator() {
  return {
    bg: 'green',
  }
}

function App() {
  const isTrue = true

  return (
    <div
      sx={{
        backgroundColor: 'blue',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      This has a hotpink background.
      <div
        css={{ backgroundColor: isTrue ? 'red' : 'blue' }}
        sx={{
          color: isTrue ? 'red' : 'blue',
        }}
        onClick={() => null}
      >
        Another div that isn't hoisted
      </div>
      <Box
        variants={['var1', 'var2']}
        sx={{ background: 'blue' }}
        aria-label="a label"
      >
        A box
      </Box>
      <Box sx={sxGenerator()}>Pure functions are also hoisted</Box>
    </div>
  )
}

// Output
      ↓ ↓ ↓ ↓ ↓ ↓

import * as React from 'react'; // or a jsx pragma
import { Box } from '@kodiak-ui/primitives';

function sxGenerator() {
  return {
    bg: 'green'
  };
}

var _ref = {
  backgroundColor: 'blue',
  '&:hover': {
    color: 'lightgreen'
  }
};
var _ref2 = ['var1', 'var2'];
var _ref3 = {
  background: 'blue'
};

var _ref4 = sxGenerator();

function App() {
  const isTrue = true;
  return <div sx={_ref}>
      This has a hotpink background.
      <div css={{
      backgroundColor: isTrue ? 'red' : 'blue'
    }} sx={{
      color: isTrue ? 'red' : 'blue'
    }} onClick={() => null}>
        Another div that isn't hoisted
      </div>
      <Box variants={_ref2} sx={_ref3} aria-label="a label">
        A box
      </Box>
      <Box sx={_ref4}>Pure functions are also hoisted</Box>
    </div>;
}
```
