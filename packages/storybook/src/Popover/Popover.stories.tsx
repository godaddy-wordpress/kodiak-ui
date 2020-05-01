import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { usePopover } from '@kodiak-ui/popover'

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
      {isVisible && (
        <Portal>
          <div ref={register}>Testing</div>
        </Portal>
      )}
    </>
  )
}
