import * as React from 'react'
import { variant } from 'kodiak-ui'
import { Grid, Box } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Grid', component: Grid }

variant('twoColumns', {
  gridTemplateColumns: 'repeat(2, auto)',
})

export function initial() {
  return (
    <Grid variants="twoColumns" sx={{ gap: 3 }}>
      <Box sx={{ p: 3, bg: 'blue.3' }}>1</Box>
      <Box sx={{ p: 3, bg: 'yellow.2' }}>2</Box>
    </Grid>
  )
}
