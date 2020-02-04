import * as React from 'react'
import { Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { Box, StyledSystemProps } from '../Box/Box'
import { SvgIcon } from '../Svg'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    mr: 2,
    borderRadius: 9999,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary',
    },
    'input:focus ~ &': {
      bg: 'highlight',
    },
  })(theme)

type InputProps = {
  variant?: string
  sx?: object
} & StyledSystemProps &
  React.InputHTMLAttributes<HTMLInputElement>

function RadioUnchecked(props: Pick<InputProps, 'sx' | 'variant'>) {
  return (
    <SvgIcon
      title="Radio input unchecked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M15.5 8a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        fill="transparent"
        stroke="#B3C2D3"
      />
    </SvgIcon>
  )
}

function RadioChecked(props: Pick<InputProps, 'sx' | 'variant'>) {
  return (
    <SvgIcon
      title="Radio input checked"
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M13.5 8a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        stroke="#0076D1"
        strokeWidth="5"
      />
    </SvgIcon>
  )
}

function RadioIcon({ sx, variant }: InputProps) {
  return (
    <>
      <RadioUnchecked
        sx={{
          display: 'block',
          'input:checked ~ &': {
            display: 'none',
          },
          ...sx,
        }}
        variant={variant}
      />
      <RadioChecked
        sx={{
          display: 'none',
          'input:checked ~ &': {
            display: 'block',
          },
          ...sx,
        }}
        variant={variant}
      />
    </>
  )
}

export const Radio = React.forwardRef(
  (
    { sx, variant = 'radios', ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <Box>
      <input
        ref={ref}
        type="radio"
        {...props}
        style={{
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      />
      <RadioIcon aria-hidden="true" sx={sx} variant={variant} {...props} />
    </Box>
  ),
)
