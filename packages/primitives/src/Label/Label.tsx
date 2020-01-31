import React from 'react'
import { Box } from '../Box'

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<typeof Box> & JSX.IntrinsicElements['label']
>(({ variant = 'label', ...props }, ref) => (
  <Box as="label" variant={variant} ref={ref as any} {...props} />
))
