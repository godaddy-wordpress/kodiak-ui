import React from 'react'
import { Svg } from './Svg'

type SvgIconProps = {
  title?: string
  desc?: string
} & React.ComponentProps<typeof Svg>

/* Adds accesibility to the Svg element */
export const SvgIcon = ({ title, desc, ...props }: SvgIconProps) => (
  <Svg {...props}>
    <title>{title}</title>
    <desc>{desc}</desc>
    {props.children}
  </Svg>
)
