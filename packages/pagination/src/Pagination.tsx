import * as React from 'react'
import { VariantProps } from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives/box'

type PaginationProps = {
  children: React.ReactNode
} & VariantProps

export function Pagination({ children }: PaginationProps) {
  return (
    <Box
      as="nav"
      variantKey="paginations"
      __base={{
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: 'default',
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  )
}
