import * as React from 'react'
import { Flex, Text, Svg } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Svg', component: Svg }

export function initial() {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Svg
        viewBox="0 0 24 24"
        sx={{ color: 'primary', mr: 2, height: '24px', width: '24px' }}
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </Svg>
      <Text>
        Supports theme or custom colors that by default apply to fill.
      </Text>
    </Flex>
  )
}

export function strokeCurrentColor() {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Svg
        sx={{
          color: 'primary',
          fill: 'none',
          stroke: 'currentColor',
          mr: 2,
          height: '24px',
          width: '24px',
        }}
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </Svg>
      <Text>Stroke currentColor is supported</Text>
    </Flex>
  )
}

export function customColors() {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Svg
        color="primary"
        sx={{
          color: 'primary',
          fill: 'none',
          stroke: 'currentColor',
          mr: 2,
          p: 2,
          height: '36px',
          width: '36px',
        }}
        viewBox="0 0 24 24"
      >
        <path
          fill="rebeccapurple"
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
        <path stroke="blue" d="M0 0h24v24H0z" />
      </Svg>
      <Text>
        Custom fills and colors within the svg are used. Theme padding and
        margins can also be applied
      </Text>
    </Flex>
  )
}
