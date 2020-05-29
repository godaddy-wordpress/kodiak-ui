import * as React from 'react'
import { Box, Image } from '@kodiak-ui/primitives'
import imageFile from './image.jpg'

export default { title: 'Primitives/Avatar' }

export function WithImage() {
  return (
    <Image
      variant="avatar"
      src={imageFile}
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
