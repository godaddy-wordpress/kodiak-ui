import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { SxStyleProp } from 'kodiak-ui'

type ProgressProps = {
  value: number
  min?: number
  max?: number
  color?: string
  containerVariant?: string
  barVariant?: string
  sx?: SxStyleProp
  children?: React.ReactNode
  progressSx?: SxStyleProp
}

export function Progress({
  value,
  min = 0,
  max = 100,
  color = 'primary',
  containerVariant = 'container',
  barVariant = 'bar',
  children,
  progressSx,
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
          bg: color,
          height: '100%',
          transition: 'all 0.2s ease-in-out 0s',
          position: 'relative',
          width: `${
            progressWidth > 100 ? 100 : progressWidth < 0 ? 0 : progressWidth
          }%`,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        variant={barVariant}
        variantKey="progresses"
        sx={progressSx}
      >
        {children}
      </Box>
    </Box>
  )
}
