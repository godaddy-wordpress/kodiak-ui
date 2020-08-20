import * as React from 'react'
import { Iframe } from '@kodiak-ui/primitives'

export default { title: 'Iframe', component: Iframe }

export function initial() {
  return (
    <Iframe
      title="Example iframe"
      src="http://jilt.com"
      sx={{
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'black',
        height: '600px',
        width: '100%',
      }}
    />
  )
}
