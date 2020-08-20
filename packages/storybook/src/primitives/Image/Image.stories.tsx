import * as React from 'react'
import { Image } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Image', component: Image }

export function initial() {
  return (
    <Image
      src="https://api.adorable.io/avatars/400/abott@adorable.io.png"
      sx={{ width: '64px', height: '64px' }}
    />
  )
}

export function Avatar() {
  return (
    <Image
      variant="avatar"
      src="https://api.adorable.io/avatars/400/abott@adorable.io.png"
      sx={{ width: '64px', height: '64px' }}
    />
  )
}
