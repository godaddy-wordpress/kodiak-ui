import * as React from 'react'
import { Image } from '@kodiak-ui/primitives'
import imageFile from './image.jpg'

export default { title: 'Primitives/Image' }

export function initial() {
  return <Image src={imageFile} sx={{ width: '64px', height: '64px' }} />
}

export function Avatar() {
  return (
    <Image
      variant="avatar"
      src={imageFile}
      sx={{ width: '64px', height: '64px' }}
    />
  )
}
