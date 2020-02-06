import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { Box, Input, Label } from '../'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inline?: boolean
  displayInForm?: boolean
  sx?: SxStyleProp
  variant?: string
  variantKey?: string
}

type SwitchIndicatorProps = {
  checked?: boolean
  disabled?: boolean
} & Pick<SwitchProps, 'sx' | 'variant' | 'variantKey'>

function SwitchIndicator({
  checked,
  disabled,
  sx,
  variant,
  variantKey,
}: SwitchIndicatorProps) {
  return (
    <Box
      variant={`${variant}.${checked ? 'checked' : 'unchecked'}`}
      variantKey={variantKey}
      as="span"
      borderStyle="solid"
      borderWidth={1}
      opacity={disabled ? 0.7 : 1}
      borderRadius={40}
      display="inline-block"
      height={16}
      ml={-38}
      mr={2}
      position="relative"
      sx={{
        transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        ...(disabled && { cursor: 'not-allowed', outline: 'none' }),

        'input:focus ~ &': {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineOffset: 2,
        },

        '&::before': {
          borderRadius: '50%',
          content: '""',
          display: 'block',
          height: 12,
          width: 12,
          position: 'absolute',
          top: '50%',
          left: checked ? 'calc(100% - 13px)' : '1px',
          transform: 'translateY(-50%)',
          transition: 'left 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        },
        ...sx,
      }}
      width={28}
    />
  )
}

export const Switch = React.forwardRef(
  (
    {
      label,
      inline = false,
      displayInForm = false,
      checked,
      disabled,
      children,
      variantKey = 'forms',
      variant = 'switch',
      sx,
      ...rest
    }: SwitchProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Label
      alignItems="center"
      display="inline-flex"
      flexShrink={0}
      sx={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        textTransform: 'none',
      }}
      opacity={disabled ? 0.5 : 1}
      pl={6}
      fontSize="default"
      position="relative"
      mr={inline ? 2 : 4}
      mb={inline ? 0 : 4}
      minHeight={displayInForm ? '32px' : 'none'}
    >
      <Input
        ref={ref}
        type="checkbox"
        position="absolute"
        opacity={0}
        left={0}
        top={0}
        zIndex={-1}
        checked={checked}
        {...rest}
      />
      <SwitchIndicator
        checked={checked}
        disabled={disabled}
        variant={variant}
        variantKey={variantKey}
        sx={sx}
      />
      {label || children}
    </Label>
  ),
)
