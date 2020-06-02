import * as React from 'react'
import { Box, Image } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Avatar' }

export function WithImage() {
  return (
    <Image
      variant="avatar"
      src={'https://api.adorable.io/avatars/400/abott@adorable.io.png'}
      sx={{ width: '64px', height: '64px' }}
    />
  )
}

export function WithoutImage() {
  return (
    <Box
      variant="avatar"
      sx={{
        bg: 'gray.5',
        color: 'white',
        width: '64px',
        height: '64px',
        fontSize: '24px',
      }}
    >
      G
    </Box>
  )
}
