import * as React from 'react'
import { VariantProps } from '@kodiak-ui/core'
import { Button } from '@kodiak-ui/primitives'

type PaginationButtonProps = { children: React.ReactNode } & VariantProps &
  React.HTMLAttributes<HTMLButtonElement>

export function PaginationButton({ children }: PaginationButtonProps) {
  return (
    <Button variantKey="paginations" variant="button">
      {children}
    </Button>
  )
}
