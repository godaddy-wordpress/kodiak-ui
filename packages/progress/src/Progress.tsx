import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'

type ProgressProps = {
  value: number
  min?: number
  max?: number
  containerVariant?: string
  barVariant?: string
}

export function Progress({
  value,
  min = 0,
  max = 100,
  containerVariant = 'container',
  barVariant = 'bar',
}: ProgressProps) {
  const progressWidth = ((value - min) * 100) / (max - min)

  return (
    <Box
      __base={{
        bg: 'muted',
        borderRadius: 'default',
        height: '12px',
        overflow: 'hidden',
      }}
      variant={containerVariant}
      variantKey="progresses"
    >
      <Box
        __base={{
          bg: 'primary',
          height: '100%',
          transition: 'all 0.2s ease-in-out 0s',
          width: `${progressWidth}%`,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        variant={barVariant}
        variantKey="progresses"
      />
    </Box>
  )
}
