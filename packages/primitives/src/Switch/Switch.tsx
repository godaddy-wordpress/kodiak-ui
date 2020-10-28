import * as React from 'react'
import { Input } from '../Input'
import { Box } from '../Box/Box'
import { VariantProps, SxStyleProp } from 'kodiak-ui'

type SwitchProps = {
  indicatorVariant?: string
  sx?: SxStyleProp
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps

type SwitchIndicatorProps = SwitchProps

function SwitchIndicator({
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
      __base={{
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        width: 28,
        height: 16,
        borderRadius: 'full',
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'inline-flex',
        alignItems: 'center',
        'input:focus ~ &': {
          outlineWidth: 1,
          outlineOffset: 2,
          outlineStyle: 'solid',
          outlineColor: 'primary',
        },

        'input:checked ~ &': {
          backgroundColor: 'primary',
          borderColor: 'primary',
          '& > div': {
            transform: `translateX(calc(100% - 1px))`,
          },
        },

        'input:not(:checked) ~ &': {
          backgroundColor: 'muted',
          borderColor: 'muted',
          '& > div': {
            transform: `translateX(0)`,
          },
        },
      }}
      sx={sx as any}
    >
      {/* Circle Indicator */}
      <Box
        variantKey={variantKey}
        variant={`${variant}.${indicatorVariant}`}
        __base={{
          borderRadius: 'full',
          width: 12,
          height: 12,
          ml: '1px',
          backgroundColor: 'background',
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
        {...(props as any)}
      >
        <Input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={event => !disabled && onChange && onChange(event)}
          disabled={disabled}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 1,
            width: 1,
            opacity: 0,
          }}
          {...(props as any)}
        />
        <SwitchIndicator
          variant={variant}
          variantKey={variantKey}
          sx={sx as any}
          disabled={disabled}
          indicatorVariant={indicatorVariant}
        />
      </Box>
    )
  },
)
