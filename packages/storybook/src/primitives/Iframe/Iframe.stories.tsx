import * as React from 'react'
import { variant } from 'kodiak-ui'
import { Iframe } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Iframe', component: Iframe }

variant('square', {
  height: '600px',
  width: '600px',
})

export function initial() {
  return (
    <Iframe
      title="Example iframe"
      src="http://jilt.com"
      variants="square"
      sx={{
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'black',
      }}
    />
  )
}
