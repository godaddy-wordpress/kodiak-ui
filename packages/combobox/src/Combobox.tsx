import * as React from 'react'
import { UseComboboxGetComboboxPropsOptions } from 'downshift'
import { Box } from '@kodiak-ui/primitives'

export interface ComboboxProps extends UseComboboxGetComboboxPropsOptions {
  as?: React.ElementType
  children: React.ReactNode
}

export const Combobox = React.forwardRef(function Combobox(
  { as = 'div', children, ...props }: ComboboxProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <Box as={as} ref={ref} {...props}>
      {children}
    </Box>
  )
})
