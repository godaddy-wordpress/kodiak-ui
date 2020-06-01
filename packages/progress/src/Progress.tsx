import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { SxStyleProp } from '@kodiak-ui/core'

type ProgressProps = {
  value: number
  min?: number
  max?: number
  containerVariant?: string
  barVariant?: string
  sx?: SxStyleProp
  children?: React.ReactNode
}

export function Progress({
  value,
  min = 0,
  max = 100,
  containerVariant = 'container',
  barVariant = 'bar',
  children,
  ...props
}: ProgressProps) {
  const progressWidth = ((value - min) * 100) / (max - min)

  return (
    <Box
      __base={{
        bg: 'muted',
        borderRadius: 'default',
        height: '12px',
      }}
      variant={containerVariant}
      variantKey="progresses"
      {...props}
    >
      <Box
        __base={{
          bg: 'primary',
          height: '100%',
          transition: 'all 0.2s ease-in-out 0s',
          position: 'relative',
          width: `${progressWidth}%`,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        variant={barVariant}
        variantKey="progresses"
      >
        {children}
      </Box>
    </Box>
  )
}
