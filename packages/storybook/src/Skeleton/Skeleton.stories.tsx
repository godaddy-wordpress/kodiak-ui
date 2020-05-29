import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { Skeleton, Repeat } from '@kodiak-ui/skeleton'

export default { title: 'Skeleton' }

export function LoadingSkeleton() {
  return (
    <Box sx={{ margin: '25%' }}>
      <h1>
        <Skeleton />
      </h1>
      <Box sx={{ fontSize: 1, lineHeight: 'text' }}>
        <Skeleton />
        <Repeat count={5}>
          <Skeleton />
        </Repeat>
      </Box>
    </Box>
  )
}
