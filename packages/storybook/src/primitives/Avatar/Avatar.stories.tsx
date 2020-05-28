import * as React from 'react'
import { Avatar } from '@kodiak-ui/primitives'
import imageFile from './image.jpg'

export default { title: 'Primitives/Avatar' }

export function WithImage() {
  return (
    <Avatar
      imageSrc={imageFile}
      text="G"
      sx={{ width: '64px', height: '64px' }}
    />
  )
}

export function WithoutImage() {
  return (
    <Avatar
      text="G"
      sx={{
        bg: 'gray.5',
        color: 'white',
        width: '64px',
        height: '64px',
        fontSize: '24px',
      }}
    />
  )
}
