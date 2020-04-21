import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'
import { useMenu } from '@kodiak-ui/menu'

export default { title: 'Menu' }

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
    handleCloseMenu,
    getItemProps,
    Portal,
  } = useMenu()

  return (
    <>
      <Button ref={register} onClick={handleToggleMenu}>
        Open menu
      </Button>
      {isExpanded && (
        <Portal>
          <ul ref={register}>
            <MenuItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action1',
                  handler: () => {
                    console.log('action1')
                    handleCloseMenu()
                  },
                })
              }
              {...getItemProps('action1')}
              style={
                activeItem === 'action1' ? { backgroundColor: '#bde4ff' } : {}
              }
            >
              Action 1
            </MenuItem>
            <MenuItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action2',
                  handler: () => console.log('action2'),
                })
              }
              {...getItemProps('action2')}
              style={
                activeItem === 'action2' ? { backgroundColor: '#bde4ff' } : {}
              }
            >
              Action 2
            </MenuItem>
            <MenuItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action3',
                  handler: () => console.log('action3'),
                })
              }
              {...getItemProps('action3')}
              style={
                activeItem === 'action3' ? { backgroundColor: '#bde4ff' } : {}
              }
            >
              Action 3
            </MenuItem>
            <MenuItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action4',
                  handler: () => console.log('action4'),
                })
              }
              {...getItemProps('action4')}
              style={
                activeItem === 'action4' ? { backgroundColor: '#bde4ff' } : {}
              }
            >
              Action 4
            </MenuItem>
          </ul>
        </Portal>
      )}
    </>
  )
}
