import * as React from 'react'
import { VariantProps, SxStyleProp } from 'kodiak-ui'
import { Box } from '../Box'
import { SvgIcon } from '../Svg'
import { Input } from '../Input'

type InputProps = {
  sx?: SxStyleProp
} & VariantProps &
  React.InputHTMLAttributes<HTMLInputElement>

type RadioIcon = Pick<InputProps, 'sx' | 'variant' | 'variantKey'>

function RadioUnchecked(props: RadioIcon) {
  return (
    <SvgIcon
      title="Radio input unchecked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...(props as any)}
    >
      <path d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.398 6.398 0 011.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4z" />
    </SvgIcon>
  )
}

function RadioChecked(props: RadioIcon) {
  return (
    <SvgIcon
      title="Radio input checked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...(props as any)}
    >
      <path d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 11C6.5 11 5 9.75484 5 8C5 6.24516 6.5 5 8 5C9.5 5 11 6.19903 11 8C11 9.80097 9.5 11 8 11Z" />
    </SvgIcon>
  )
}

function RadioIcon({ sx, variant, variantKey }: InputProps) {
  return (
    <>
      <RadioChecked
        sx={{
          ...(sx as any),
          display: 'none',
          'input:checked ~ &': {
            display: 'block',
            color: 'primary',
          },
        }}
        variant={variant}
        variantKey={variantKey}
      />
      <RadioUnchecked
        sx={{
          ...(sx as any),
          color: 'defaultGray',
          display: 'block',
          'input:checked ~ &': {
            display: 'none',
          },
        }}
        variant={variant}
        variantKey={variantKey}
      />
    </>
  )
}

export const Radio = React.forwardRef(
  (
    { variant = 'radio', variantKey = 'forms', sx, ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Box>
      <Input
        ref={ref}
        type="radio"
        sx={{
          height: 1,
          opacity: 0,
          overflow: 'hidden',
          position: 'absolute',
          width: 1,
          zIndex: -1,
        }}
        {...(props as any)}
      />
      <RadioIcon
        aria-hidden="true"
        sx={{
          'input:focus ~ &': {
            outline: '1px auto',
            outlineOffset: '1px',
            outlineColor: 'primary',
          },
          ...sx,
        }}
        variant={variant}
        variantKey={variantKey}
        {...(props as any)}
      />
    </Box>
  ),
)
