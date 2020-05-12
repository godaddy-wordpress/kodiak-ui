import * as React from 'react'
import { UseSelectGetToggleButtonPropsOptions } from 'downshift'
import { VariantProps } from '@kodiak-ui/core'
import { Button, SvgIcon } from '@kodiak-ui/primitives'
import { SelectLoading } from './SelectLoading'

export interface SelectButtonProps
  extends VariantProps,
    UseSelectGetToggleButtonPropsOptions {
  children: React.ReactNode
  isOpen: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
}

export const SelectButton = React.forwardRef(function SelectButton(
  { children, isOpen, variantKey = 'selects', ...props }: SelectButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <Button
      __base={{
        alignItems: 'center',
        bg: 'inherit',
        border: '1px solid',
        borderColor: 'muted',
        color: 'text',
        display: 'inline-flex',
        justifyContent: 'space-between',
        minWidth: '184px',
        textAlign: 'left',
      }}
      ref={ref}
      variantKey={variantKey}
      {...props}
    >
      {isLoading ? renderLoading() : children}
      <SvgIcon
        viewBox="0 0 16 16"
        sx={{
          color: 'text',
          height: '16px',
          transform: isOpen ? 'rotate(-0.5turn)' : '',
          transition: 'transform 0.2s ease-in-out',
          width: '16px',
        }}
      >
        <path
          fill="currentColor"
          d="M11.912 5.754a.62.62 0 00-.25-.186.883.883 0 00-.344-.068H4.682c-.12 0-.24.024-.344.068a.62.62 0 00-.25.186.398.398 0 00-.088.252.405.405 0 00.098.25l3.318 4.004c.061.073.147.134.249.176A.886.886 0 008 10.5a.886.886 0 00.335-.064.633.633 0 00.249-.176l3.318-4.004a.405.405 0 00.098-.25.398.398 0 00-.088-.252z"
        />
      </SvgIcon>
    </Button>
  )
})
