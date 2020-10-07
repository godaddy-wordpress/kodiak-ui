import * as React from 'react'
import { Link } from '@kodiak-ui/primitives'
import { variant } from 'kodiak-ui'

export default { title: 'Primitives/Link', component: Link }

variant('orangeHover', {
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: 'orange',
  },
})

export function Initial() {
  return (
    <Link href="https://jilt.com" target="_blank" rel="noreferrer">
      jilt.com
    </Link>
  )
}

export function WithHover() {
  return (
    <Link
      href="https://jilt.com"
      target="_blank"
      rel="noreferrer"
      variants="orangeHover"
    >
      jilt.com
    </Link>
  )
}
