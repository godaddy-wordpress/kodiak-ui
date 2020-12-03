import * as React from 'react'
import { forwardRef } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '../Box'

type SvgProps = React.SVGProps<SVGSVGElement> & KodiakUIProps

export const Svg = forwardRef<SvgProps, any>(
  ({ base, variantKey = 'svg', ...props }, ref) => (
    <Box
      ref={ref}
      as="svg"
      base={base || 'svg'}
      variantKey={variantKey}
      {...props}
    />
  ),
)
