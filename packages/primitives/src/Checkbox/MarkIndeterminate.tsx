import * as React from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { SvgIcon } from '../Svg'

export type MarkIndeterminateProps = KodiakUIProps

export const MarkIndeterminate = React.forwardRef<any, MarkIndeterminateProps>(
  ({ sx, ...props }, ref) => (
    <SvgIcon
      ref={ref}
      viewBox="0 0 8 4"
      sx={{ height: '4px', width: '8px', ...sx }}
      {...props}
    >
      <path
        d="M7.47826 0.750168H0.521739C0.233591 0.750168 0 0.990015 0 1.28588V2.71445C0 3.01032 0.233591 3.25017 0.521739 3.25017H7.47826C7.76641 3.25017 8 3.01032 8 2.71445V1.28588C8 0.990015 7.76641 0.750168 7.47826 0.750168Z"
        fill="white"
      />
    </SvgIcon>
  ),
)
