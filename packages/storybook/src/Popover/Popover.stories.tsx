import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { usePopover, Popover, PopoverArrow } from '@kodiak-ui/popover'

export default { title: 'Popover' }

export function Initial() {
  const { isVisible, register, getTriggerProps, Portal } = usePopover()

  return (
    <>
      <Button
        ref={node => register(node, { trigger: true })}
        {...getTriggerProps()}
      >
        Hover over me
      </Button>
      <Portal>
        <Popover ref={register}>
          This domain has failed verification. Please contact support.
        </Popover>
        <PopoverArrow
          ref={(node: HTMLElement) => register(node, { arrow: true })}
        />
      </Portal>
    </>
  )
}
