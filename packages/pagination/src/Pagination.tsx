import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'

interface PaginationProps {
  children: React.ReactNode
}

export function Pagination({ children }: PaginationProps) {
  return <Box as="nav">{children}</Box>
}
