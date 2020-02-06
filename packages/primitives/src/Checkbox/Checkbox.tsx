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
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

function CheckboxChecked(props: CheckboxIcon) {
  return (
    <SvgIcon
      title="Checkbox input checked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
        fill="#0076D1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z"
        fill="currentColor"
      />
      <path
        d="M12.937 5.062L11.7 3.815a.222.222 0 00-.313 0L6.165 9.068a.221.221 0 01-.314 0L4.615 7.822a.221.221 0 00-.314 0L3.065 9.068a.223.223 0 000 .315l2.786 2.802a.222.222 0 00.314 0l6.772-6.812a.223.223 0 000-.311z"
        fill="#fff"
      />
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
