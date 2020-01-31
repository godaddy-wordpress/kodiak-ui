import React from 'react'
import { Box } from '../Box'

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<typeof Box>
>(({ variant = 'label', ...props }, ref) => (
  <Box ref={ref as any} as="label" variant={variant} {...props} />
))
