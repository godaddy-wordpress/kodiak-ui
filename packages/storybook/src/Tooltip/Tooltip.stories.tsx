import * as React from 'react'
import { Button, Box } from '@kodiak-ui/primitives'
import { useTooltip, Tooltip, TooltipArrow } from '@kodiak-ui/tooltip'

export default { title: 'Tooltip' }

export function Initial() {
  const { isVisible, register, getTriggerProps, Portal } = useTooltip({
    placement: 'right',
  })

  return (
    <Box sx={{ margin: '25%' }}>
      <Button
        ref={node => register(node, { trigger: true })}
        {...getTriggerProps()}
      >
        Hover over me
      </Button>
      {isVisible && (
        <Portal>
          <Tooltip ref={register}>
            This domain has failed verification. Please contact support.
            <TooltipArrow
              ref={(node: HTMLElement) => register(node, { arrow: true })}
            />
          </Tooltip>
        </Portal>
      )}
    </Box>
  )
}
