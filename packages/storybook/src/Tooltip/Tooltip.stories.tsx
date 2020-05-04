import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useTooltip, Tooltip, TooltipArrow } from '@kodiak-ui/tooltip'

export default { title: 'Tooltip' }

export function Initial() {
  const { isVisible, register, getTriggerProps, Portal } = useTooltip()

  return (
    <>
      <Button
        ref={node => register(node, { trigger: true })}
        {...getTriggerProps()}
      >
        Hover over me
      </Button>
      <Portal>
        <Tooltip ref={register}>
          This domain has failed verification. Please contact support.
        </Tooltip>
        <TooltipArrow
          ref={(node: HTMLElement) => register(node, { arrow: true })}
        />
      </Portal>
    </>
  )
}
