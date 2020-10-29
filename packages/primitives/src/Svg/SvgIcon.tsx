import React from 'react'
import { Svg } from './Svg'

type SvgIconProps = {
  title?: string
  desc?: string
} & React.ComponentProps<typeof Svg>

export const SvgIcon = React.forwardRef(
  ({ title, desc, ...props }: SvgIconProps, ref: any) => (
    <Svg ref={ref} {...props}>
      <title>{title}</title>
      <desc>{desc}</desc>
      {props.children}
    </Svg>
  ),
)
