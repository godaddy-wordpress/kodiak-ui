import * as React from 'react'
import { Input } from './Input'
import { Box } from '../Box'

enum IconPosition {
  Start = 'START',
  End = 'END',
}

interface UseInputParams {
  icon: React.ReactNode
  iconPosition: IconPosition
}

export function useInput({
  icon,
  iconPosition,
}: UseInputParams): React.ReactNode {
  return (
    <Box>
      <Input placeholder="Icon input"></Input>
    </Box>
  )
}
