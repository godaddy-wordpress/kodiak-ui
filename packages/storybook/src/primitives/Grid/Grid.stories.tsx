import * as React from 'react'
import { Grid, Box } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Grid', component: Grid }

export function initial() {
  return (
    <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
      <Box p={3} bg="blue.3">
        1
      </Box>
      <Box p={3} bg="yellow.2">
        2
      </Box>
    </Grid>
  )
}
