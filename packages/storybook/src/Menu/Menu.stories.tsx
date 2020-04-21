import * as React from 'react'
import { Button, Flex, Box } from '@kodiak-ui/primitives'
import { useMenu, MenuList, MenuListItem } from '@kodiak-ui/menu'

export default { title: 'Menu' }

function AlignedRight() {
  const {
    register,
    isExpanded,
    activeItem,
    handleToggleMenu,
    handleCloseMenu,
    getItemProps,
    Portal,
  } = useMenu({ align: 'right', width: 91 })

  return (
    <>
      <Button ref={register} onClick={handleToggleMenu}>
        Open menu
      </Button>
      {isExpanded && (
        <Portal>
          <MenuList ref={register}>
            <MenuListItem
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
              sx={{
                ...(activeItem === 'action1'
                  ? { bg: 'primary', color: 'white' }
                  : {}),
              }}
            >
              Action 1
            </MenuListItem>
            <MenuListItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action2',
                  handler: () => console.log('action2'),
                })
              }
              {...getItemProps('action2')}
              sx={{
                ...(activeItem === 'action2'
                  ? { bg: 'primary', color: 'white' }
                  : {}),
              }}
            >
              Action 2
            </MenuListItem>
            <MenuListItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action3',
                  handler: () => console.log('action3'),
                })
              }
              {...getItemProps('action3')}
              sx={{
                ...(activeItem === 'action3'
                  ? { bg: 'primary', color: 'white' }
                  : {}),
              }}
            >
              Action 3
            </MenuListItem>
            <MenuListItem
              ref={node =>
                register(node as HTMLLIElement, {
                  name: 'action4',
                  handler: () => console.log('action4'),
                })
              }
              {...getItemProps('action4')}
              sx={{
                ...(activeItem === 'action4'
                  ? { bg: 'primary', color: 'white' }
                  : {}),
              }}
            >
              Action 4
            </MenuListItem>
          </MenuList>
        </Portal>
      )}
    </>
  )
}

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
      <Box sx={{ p: 5 }}>
        <Button ref={register} onClick={handleToggleMenu}>
          Open menu
        </Button>
        {isExpanded && (
          <Portal>
            <MenuList ref={register}>
              <MenuListItem
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
                sx={{
                  ...(activeItem === 'action1'
                    ? { bg: 'primary', color: 'white' }
                    : {}),
                }}
              >
                Long Name Action 1
              </MenuListItem>
              <MenuListItem
                ref={node =>
                  register(node as HTMLLIElement, {
                    name: 'action2',
                    handler: () => console.log('action2'),
                  })
                }
                {...getItemProps('action2')}
                sx={{
                  ...(activeItem === 'action2'
                    ? { bg: 'primary', color: 'white' }
                    : {}),
                }}
              >
                Action 2
              </MenuListItem>
              <MenuListItem
                ref={node =>
                  register(node as HTMLLIElement, {
                    name: 'action3',
                    handler: () => console.log('action3'),
                  })
                }
                {...getItemProps('action3')}
                sx={{
                  ...(activeItem === 'action3'
                    ? { bg: 'primary', color: 'white' }
                    : {}),
                }}
              >
                Action 3
              </MenuListItem>
              <MenuListItem
                ref={node =>
                  register(node as HTMLLIElement, {
                    name: 'action4',
                    handler: () => console.log('action4'),
                  })
                }
                {...getItemProps('action4')}
                sx={{
                  ...(activeItem === 'action4'
                    ? { bg: 'primary', color: 'white' }
                    : {}),
                }}
              >
                Action 4
              </MenuListItem>
            </MenuList>
          </Portal>
        )}
      </Box>
      <Flex sx={{ justifyContent: 'flex-end', p: 5 }}>
        <AlignedRight />
      </Flex>
    </>
  )
}
