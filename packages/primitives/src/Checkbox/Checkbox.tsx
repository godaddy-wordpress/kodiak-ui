import * as React from 'react'
import { Box, VariantProps } from '../Box'
import { SvgIcon } from '../Svg'
import { Input } from '../Input'
import { useCheckbox } from './useCheckbox'
import { Label } from '../Label'
import type { SxStyleProp } from '@kodiak-ui/core'

type InputProps = {
  sx?: SxStyleProp
}

type CheckboxProps = {
  children?: React.ReactNode
  label?: string
  indeterminate?: boolean
  sx?: SxStyleProp
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & VariantProps &
  React.InputHTMLAttributes<HTMLInputElement>

type CheckboxIcon = React.ComponentProps<typeof SvgIcon>

function CheckboxUnchecked({ sx, ...props }: CheckboxIcon) {
  return (
    <SvgIcon
      title="Checkbox input unchecked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      sx={{
        height: '16px',
        width: '16px',
        ...sx,
      }}
      {...(props as any)}
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

function CheckboxChecked({ sx, ...props }: CheckboxIcon) {
  return (
    <SvgIcon
      title="Checkbox input checked"
      viewBox="0 0 16 16"
      sx={{
        height: '16px',
        width: '16px',
        ...sx,
      }}
      {...(props as any)}
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

function CheckboxIndeterminate(props: CheckboxIcon) {
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
        d="M11.478 6.75H4.522A.529.529 0 004 7.286v1.428c0 .296.234.536.522.536h6.956c.288 0 .522-.24.522-.536V7.286a.529.529 0 00-.522-.536z"
        fill="#fff"
      />
    </SvgIcon>
  )
}

function CheckboxIcon({ checked, indeterminate, sx, ...props }: CheckboxProps) {
  if (checked) {
    return (
      <CheckboxChecked
        {...(props as any)}
        sx={{
          ...sx,
          color: 'primary',
          display: 'block',
        }}
      />
    )
  }

  if (indeterminate) {
    return (
      <CheckboxIndeterminate
        {...(props as any)}
        sx={{
          ...sx,
          color: 'primary',
          display: 'block',
        }}
      />
    )
  }

  return (
    <CheckboxUnchecked
      {...(props as any)}
      sx={{
        ...sx,
        color: 'defaultGray',
        display: 'block',
      }}
    />
  )
}

function CheckboxWrapper({
  label,
  children,
  ...props
}: {
  label?: string | React.ReactNode
  children: React.ReactNode
}) {
  return label ? (
    <Label
      {...props}
      sx={{
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        mb: 0,
      }}
    >
      {children} {label}
    </Label>
  ) : (
    <>{children}</>
  )
}

export const Checkbox = React.forwardRef(
  (
    {
      label,
      variant = 'checkbox',
      variantKey = 'forms',
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const { getLabelProps, getInputProps, getIconProps } = useCheckbox({
      ...props,
    })

    return (
      <CheckboxWrapper label={label} {...getLabelProps()}>
        <Box>
          <Input
            {...getInputProps()}
            ref={ref}
            sx={{
              height: 1,
              position: 'absolute',
              opacity: 0,
              overflow: 'hidden',
              width: 1,
              zIndex: -1,
            }}
          />
          <CheckboxIcon
            {...getIconProps()}
            variant={variant}
            variantKey={variantKey}
            sx={{
              'input:focus ~ &': {
                outline: '1px auto',
                outlineOffset: '1px',
                outlineColor: 'primary',
              },
            }}
          />
        </Box>
      </CheckboxWrapper>
    )
  },
)
