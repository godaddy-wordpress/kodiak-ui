import * as React from 'react'
import { forwardRef, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Button } from './Button'
import { VisuallyHidden } from '../VisuallyHidden'
import { SvgIcon } from '../Svg'

export type CloseButtonProps = { children?: ReactNode } & DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  KodiakUIProps

export const CloseButton = forwardRef<CloseButtonProps, any>(
  ({ children, sx, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variants="shadow"
        sx={{ height: '20px', width: '20px', p: 0, ...sx }}
        data-testid="closeButton"
        {...props}
      >
        <SvgIcon
          title="Close icon"
          viewBox="0 0 24 24"
          sx={{ height: '100%', width: '100%' }}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
          />
        </SvgIcon>
        <VisuallyHidden>{children ? children : 'Close'}</VisuallyHidden>
      </Button>
    )
  },
)
