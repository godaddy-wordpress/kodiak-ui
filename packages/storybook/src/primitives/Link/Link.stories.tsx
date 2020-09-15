import * as React from 'react'
import { Link } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Link', component: Link }

export function initial() {
  return (
    <Link href="https://jilt.com" target="_blank" rel="noreferrer">
      jilt.com
    </Link>
  )
}

export function withHover() {
  return (
    <Link
      href="https://jilt.com"
      sx={{ color: 'red', '&:hover': { color: 'blue' } }}
      target="_blank"
      rel="noreferrer"
    >
      jilt.com
    </Link>
  )
}
