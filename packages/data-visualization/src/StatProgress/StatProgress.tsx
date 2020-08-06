import * as React from 'react'
import { Flex, Box, Text } from '@kodiak-ui/primitives'
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
        <Text as="span" sx={{ fontWeight: 'semiBold' }}>
          {label}
        </Text>
        <Text as="span" sx={{ fontWeight: 'semiBold' }}>
          {labelRight}
        </Text>
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
