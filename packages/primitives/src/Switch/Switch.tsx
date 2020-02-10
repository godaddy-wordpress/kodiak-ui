import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { Box, Input } from '../'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  displayInForm?: boolean
  sx?: SxStyleProp
  variant?: string
  variantKey?: string
  indicatorVariant?: string
}

type SwitchIndicatorProps = {
  checked?: boolean
} & Pick<
  SwitchProps,
  'sx' | 'variant' | 'variantKey' | 'indicatorVariant' | 'disabled'
>

function SwitchIndicator({
  checked,
  sx,
  variant,
  variantKey,
  indicatorVariant,
  disabled,
}: SwitchIndicatorProps) {
  return (
    <Box
      variant={variant}
      variantKey={variantKey}
      opacity={disabled ? 0.5 : 1}
      display="inline-flex"
      width={28}
      height={16}
      borderRadius="full"
      borderStyle="solid"
      borderWidth={1}
      backgroundColor={checked ? 'primary' : 'muted'}
      borderColor={checked ? 'primary' : 'muted'}
      sx={{
        transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',

        'input:focus ~ &': {
          outlineWidth: 1,
          outlineStyle: 'solid',
          outlineOffset: 2,
          outlineColor: 'primary',
        },

        ...sx,
      }}
      alignItems="center"
    >
      {/* Circle Indicator */}
      <Box
        width={12}
        height={12}
        variantKey={variantKey}
        variant={`${variant}.${indicatorVariant}`}
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
      onChange,
      disabled,
      sx,
      variantKey = 'forms',
      variant = 'switch',
      indicatorVariant = 'indicator',
      ...props
    }: SwitchProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Box
        display="inline-flex"
        position="relative"
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Input
          ref={ref}
          opacity={0}
          type="checkbox"
          position="absolute"
          left={0}
          top={0}
          zIndex={-1}
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
          disabled={disabled}
          indicatorVariant={indicatorVariant}
        />
      </Box>
    )
  },
)
