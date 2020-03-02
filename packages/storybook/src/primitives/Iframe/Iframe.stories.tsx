import * as React from 'react'
import { Iframe } from '@kodiak-ui/primitives'

export default { title: 'Iframe' }

export function initial() {
  return (
    <Iframe
      title="Example iframe"
      src="http://jilt.com"
      sx={{ boxShadow: 'none', height: '600px', width: '100%' }}
    />
  )
}
