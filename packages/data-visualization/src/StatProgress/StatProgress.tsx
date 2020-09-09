import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { Flex } from '@kodiak-ui/primitives/flex'
import { Progress, ProgressThumb } from '@kodiak-ui/progress'
import { SxStyleProp } from '@kodiak-ui/core'

type StatProgressProps = {
  label?: React.ReactNode
  labelRight?: React.ReactNode
  showProgressThumb?: boolean
  color?: string
  progressSx?: SxStyleProp
} & React.ComponentProps<typeof Progress>

export function StatProgress({
  color,
  value,
  min,
  max,
  label,
  labelRight,
  showProgressThumb,
  progressSx,
}: StatProgressProps) {
  return (
    <Box variantKey="statProgress">
      <Flex
        __base={{
          alignItems: 'center',
          mb: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ fontWeight: 'semiBold' }}>{label}</Box>
        <Box sx={{ fontWeight: 'semiBold' }}>{labelRight}</Box>
      </Flex>
      <Progress
        progressSx={progressSx}
        color={color}
        value={value}
        min={min}
        max={max}
      >
        {showProgressThumb && (
          <ProgressThumb value={value} min={min} max={max} />
        )}
      </Progress>
    </Box>
  )
}
