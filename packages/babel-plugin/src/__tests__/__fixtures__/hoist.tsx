import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
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
    </div>
  )
}
