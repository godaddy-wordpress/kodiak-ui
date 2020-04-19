import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useMenu } from '@kodiak-ui/menu'

export default { title: 'Menu' }

const items = ['Action 1', 'Action 2', 'Action 3', 'Action 4', 'Action 5']

export function Inital() {
  const {
    register,
    isExpanded,
    highlightedIndex,
    handleToggleMenu,
    options,
    Portal,
  } = useMenu<string>({ items })

  return (
    <>
      <Button ref={node => register(node)} onClick={handleToggleMenu}>
        Open menu
      </Button>
      {isExpanded && (
        <Portal>
          <ul ref={node => register(node)}>
            {options.map((option, index) => (
              <li
                key={index}
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#bde4ff' }
                    : {}
                }
                {...option}
              />
            ))}
          </ul>
        </Portal>
      )}
    </>
  )
}
