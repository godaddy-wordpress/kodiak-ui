import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'

interface ComboboxProps {
  children: React.ReactNode
}

export const Combobox = React.forwardRef(function Combobox(
  { children }: ComboboxProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return <Box ref={ref}>{children}</Box>
})
