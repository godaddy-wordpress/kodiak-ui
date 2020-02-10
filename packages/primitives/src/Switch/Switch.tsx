import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { Box, Input, Label } from '../'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  displayInForm?: boolean
  sx?: SxStyleProp
  variant?: string
  variantKey?: string
}

type SwitchIndicatorProps = {
  checked?: boolean
  hasLabel?: boolean
} & Pick<SwitchProps, 'sx' | 'variant' | 'variantKey'>

function SwitchIndicator({
  checked,
  sx,
  variant,
  variantKey,
  hasLabel,
}: SwitchIndicatorProps) {
  return (
    <Box
      variant={`${variant}.${checked ? 'checked' : 'unchecked'}`}
      variantKey={variantKey}
      display="inline-flex"
      width={28}
      height={16}
      borderRadius="full"
      borderStyle="solid"
      borderWidth={1}
      mr={hasLabel ? 2 : 0}
      sx={{
        transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',

        'input:focus ~ &': {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineOffset: 2,
        },

        ...sx,
      }}
      alignItems="center"
    >
      {/* Circle Indicator */}
      <Box
        width={12}
        height={12}
        borderRadius="full"
        backgroundColor="background"
        ml="1px"
        sx={{
          transform: `translateX(${checked ? 'calc(100% - 1px)' : '0'})`,
          transition: 'transform 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        }}
      />
    </Box>
  )
}

export const Switch = React.forwardRef(
  (
    {
      checked,
      label,
      onChange,
      disabled,
      sx,
      variantKey = 'forms',
      variant = 'switch',
      children,
      ...props
    }: SwitchProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Label
        alignItems="center"
        display="inline-flex"
        opacity={disabled ? 0.5 : 1}
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        position="relative"
      >
        <Input
          ref={ref}
          opacity={0}
          type="checkbox"
          position="absolute"
          left={0}
          top={0}
          zIndex={1}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <SwitchIndicator
          checked={checked}
          variant={variant}
          variantKey={variantKey}
          sx={sx}
          hasLabel={!!label}
        />
        {label || children}
      </Label>
    )
  },
)
