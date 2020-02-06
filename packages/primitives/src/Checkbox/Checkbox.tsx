import * as React from 'react'
import { Box, StyledSystemProps } from '../Box/Box'
import { SvgIcon } from '../Svg'
import { Input } from '../Input'

type InputProps = {
  variant?: string
  variantKey?: string
  sx?: object
} & StyledSystemProps &
  React.InputHTMLAttributes<HTMLInputElement>

type CheckboxIcon = Pick<InputProps, 'sx' | 'variant' | 'variantKey'>

function CheckboxUnchecked(props: CheckboxIcon) {
  return (
    <SvgIcon
      title="Checkbox input unchecked"
      height={24}
      width={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </SvgIcon>
  )
}

function CheckboxChecked(props: CheckboxIcon) {
  return (
    <SvgIcon
      title="Checkbox input checked"
      height={24}
      width={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </SvgIcon>
  )
}

function CheckboxIcon({ sx, variant, variantKey }: InputProps) {
  return (
    <>
      <CheckboxChecked
        sx={{
          ...sx,
          display: 'none',
          'input:checked ~ &': {
            display: 'block',
            color: 'primary',
          },
        }}
        variant={variant}
        variantKey={variantKey}
      />
      <CheckboxUnchecked
        sx={{
          ...sx,
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

export const Checkbox = React.forwardRef(
  (
    { variant = 'checkbox', variantKey = 'forms', ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Box>
      <Input
        ref={ref}
        type="checkbox"
        position="absolute"
        opacity={0}
        zIndex={-1}
        width={1}
        height={1}
        overflow="hidden"
        {...props}
      />
      <CheckboxIcon
        aria-hidden="true"
        sx={{
          'input:focus ~ &': {
            bg: 'highlight',
          },
        }}
        variant={variant}
        variantKey={variantKey}
        {...props}
      />
    </Box>
  ),
)
