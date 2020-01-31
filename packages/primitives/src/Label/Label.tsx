import React from 'react'
import { Box } from '../Box'

type LabelProps = JSX.IntrinsicElements['label'] &
  React.ComponentProps<typeof Box>

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ variant = 'label', ...props }, ref) => (
    <Box as="label" variant={variant} ref={ref as any} {...props} />
  ),
)
