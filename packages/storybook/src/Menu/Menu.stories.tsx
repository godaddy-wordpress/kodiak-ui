import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useMenu } from '@kodiak-ui/menu'

export default { title: 'Menu' }

const items = ['Action 1', 'Action 2', 'Action 3', 'Action 4', 'Action 5']

const MenuItem = React.memo(
  React.forwardRef(function MenuItem(props: any, ref) {
    return <li ref={ref} {...props} />
  }),
)

export function Inital() {
  const {
    register,
    isExpanded,
    activeItem,
    handleToggleMenu,
    Portal,
  } = useMenu()

  const getStyle = React.useCallback(
    (name: string): any =>
      activeItem === name ? { backgroundColor: '#bde4ff' } : {},
    [activeItem],
  )

  return (
    <>
      <Button ref={node => register(node)} onClick={handleToggleMenu}>
        Open menu
      </Button>
      {isExpanded && (
        <Portal>
          <ul ref={node => register(node)}>
            <MenuItem
              ref={node => register(node, { name: 'action1' })}
              style={getStyle('action1')}
            >
              Action 1
            </MenuItem>
            <MenuItem
              ref={node => register(node, { name: 'action2' })}
              style={getStyle('action2')}
            >
              Action 2
            </MenuItem>
            <MenuItem
              ref={node => register(node, { name: 'action3' })}
              style={getStyle('action3')}
            >
              Action 3
            </MenuItem>
            <MenuItem
              ref={node => register(node, { name: 'action4' })}
              style={getStyle('action4')}
            >
              Action 4
            </MenuItem>
          </ul>
        </Portal>
      )}
    </>
  )
}
