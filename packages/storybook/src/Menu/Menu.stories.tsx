import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useMenu } from '@kodiak-ui/menu'

export default { title: 'Menu' }

export function Inital() {
  const { register, isExpanded, menuButtonProps } = useMenu()

  return (
    <>
      <Button ref={node => register(node)} {...menuButtonProps}>
        Open menu
      </Button>
      {isExpanded && (
        <ul ref={node => register(node)}>
          <li>Action 1</li>
          <li>Action 2</li>
        </ul>
      )}
    </>
  )
}
