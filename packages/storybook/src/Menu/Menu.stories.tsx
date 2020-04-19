import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useMenu } from '@kodiak-ui/menu'

export default { title: 'Menu' }

export function Inital() {
  const { register, isExpanded, handleToggleMenu, Portal } = useMenu()

  return (
    <>
      <Button ref={node => register(node)} onClick={handleToggleMenu}>
        Open menu
      </Button>
      {isExpanded && (
        <Portal>
          <ul ref={node => register(node)}>
            <li>Action 1</li>
            <li>Action 2</li>
          </ul>
        </Portal>
      )}
    </>
  )
}
