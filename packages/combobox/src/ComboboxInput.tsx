import * as React from 'react'
import { UseComboboxGetInputPropsOptions } from 'downshift'
import { Input } from '@kodiak-ui/primitives'
import { VariantProps } from 'kodiak-ui'

export interface ComboboxInputProps
  extends Omit<UseComboboxGetInputPropsOptions, 'as'>,
    VariantProps {}

export const ComboboxInput = React.forwardRef(function ComboboxInput(
  {
    variantKey = 'inputs',
    placeholder = 'Start typing...',
    ...props
  }: ComboboxInputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <Input
      ref={ref}
      variantKey={variantKey}
      variant="shadow"
      placeholder={placeholder}
      {...props}
    />
  )
})
