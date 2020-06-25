import * as React from 'react'
import { Box } from '../Box'
import { Label } from '../Label'
import { Input } from '../Input'
import { Text } from '../Text'

interface FieldProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  defaultValue?: string
  label: string
  name: string
  type?: string
  required?: boolean
}

export const Field = React.forwardRef(
  (
    { children, defaultValue, label, name, required, ...props }: FieldProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Box sx={{ mb: 4 }}>
      <Label
        htmlFor={name}
        variant={required ? 'required' : undefined}
        sx={{ mb: 2 }}
      >
        {label}
      </Label>
      <Input
        ref={ref}
        id={name}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
      {children}
    </Box>
  ),
)

interface FieldErrorProps extends JSX.IntrinsicAttributes {
  children: React.ReactNode
  id: string
}

export function FieldError({ children, sx, ...props }: FieldErrorProps) {
  return (
    <Text as="span" role="alert" sx={{ color: 'danger', ...sx }} {...props}>
      {children}
    </Text>
  )
}
