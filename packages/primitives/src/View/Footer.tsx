import * as React from 'react'
import { forwardRef, MutableRefObject, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '../Box'

export type FooterProps = { children: ReactNode } & KodiakUIProps

export const Footer = forwardRef(
  (props: FooterProps, ref: MutableRefObject<any>) => {
    return <Box ref={ref} as="footer" {...props} />
  },
)
