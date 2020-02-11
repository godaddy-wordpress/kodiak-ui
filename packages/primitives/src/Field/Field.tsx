import * as React from 'react'
import { Box } from '../Box'
import { Label } from '../Label'
import { Input } from '../Input'
import { Text } from '../Text'

interface FieldProps {
  label: string
  name: string
  defaultValue?: string
  children?: React.ReactNode
}

export const Field = React.forwardRef(
  (
    { label, name, defaultValue, children }: FieldProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Box mb={4}>
      <Label htmlFor={name} mb={2}>
        {label}
      </Label>
      <Input ref={ref} id={name} name={name} defaultValue={defaultValue} />
      {children}
    </Box>
  ),
)

interface FieldErrorProps extends JSX.IntrinsicAttributes {
  children: React.ReactNode
  id: string
}

export function FieldError({ children, ...props }: FieldErrorProps) {
  return (
    <Text as="span" color="danger" role="alert" {...props}>
      {children}
    </Text>
  )
}
