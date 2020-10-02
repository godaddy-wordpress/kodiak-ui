import * as React from 'react'
import { Box } from '../Box'
import { Label } from '../Label'
import { Input } from '../Input'
import { Text } from '../Text'
import { SxStyleProp } from 'kodiak-ui'

interface FieldProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  defaultValue?: string
  label: string
  name: string
  type?: string
  required?: boolean
  sx?: SxStyleProp
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
        {...(props as any)}
      />
      {children}
    </Box>
  ),
)

type FieldErrorProps = {
  children: React.ReactNode
  id: string
  sx?: SxStyleProp
}

export function FieldError({ children, sx, ...props }: FieldErrorProps) {
  return (
    <Text
      as="span"
      role="alert"
      sx={{ color: 'danger', ...(sx as any) }}
      {...props}
    >
      {children}
    </Text>
  )
}
