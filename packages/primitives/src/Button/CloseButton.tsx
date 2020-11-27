import * as React from 'react'
import { ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Button } from './Button'
import { VisuallyHidden } from '../VisuallyHidden'
import { SvgIcon } from '../Svg'

export type CloseButtonProps = { children?: ReactNode } & KodiakUIProps

export function CloseButton({ children, ...props }) {
  return (
    <Button variants="shadow" {...props}>
      <SvgIcon title="Close icon" height="20" viewBox="0 0 24 24" width="20">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          fill="currentColor"
        />
      </SvgIcon>
      <VisuallyHidden>{children ? children : 'Close'}</VisuallyHidden>
    </Button>
  )
}
