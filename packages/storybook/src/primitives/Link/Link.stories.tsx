import * as React from 'react'
import { Link } from '@kodiak/primitives'

export default { title: 'Primitives/Link' }

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
      color="red"
      sx={{ '&:hover': { color: 'blue' } }}
      target="_blank"
      rel="noreferrer"
    >
      jilt.com
    </Link>
  )
}
