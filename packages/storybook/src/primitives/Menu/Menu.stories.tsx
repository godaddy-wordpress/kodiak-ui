import * as React from 'react'
import { Menu, MenuItem, Link, VisuallyHidden } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Menu' }

export function Basic() {
  return (
    <Menu aria-label="Basic menu">
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  )
}

export function SampleStyledMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const menuItems = [
    { description: 'Item 0' },
    { description: 'Item 1' },
    { description: 'Item 2 (disabled)', isDisabled: true },
    { description: 'Item 3', href: '#' },
    { description: 'External link', href: 'https://jilt.com' },
  ]

  return (
    <Menu aria-label="Sample styled menu">
      {menuItems.map((menuItem, index) => {
        const isCurrent = selectedIndex === index
        return (
          <MenuItem
            borderLeftWidth="4px"
            borderLeftStyle="solid"
            borderLeftColor={isCurrent ? 'blue.1' : 'transparent'}
            backgroundColor={isCurrent ? 'sky.1' : 'transparent'}
            pl={7}
            py={4}
            key={menuItem.description}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                !menuItem.isDisabled && setSelectedIndex(index)
              }
            }}
            sx={{
              cursor: 'pointer',
              pointerEvents: menuItem.isDisabled ? 'none' : 'auto',
              color: 'ink.2',
              fontWeight: 'medium',
            }}
          >
            {menuItem.href ? (
              <Link
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={menuItem.href}
                rel="noopener"
                aria-current={isCurrent}
                tabIndex={menuItem.isDisabled ? -1 : 0}
              >
                {menuItem.description}
              </Link>
            ) : (
              <span tabIndex={menuItem.isDisabled ? -1 : 0}>
                {isCurrent && <VisuallyHidden>Current Page:</VisuallyHidden>}
                {menuItem.description}
              </span>
            )}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export function SimplePillMenuWithTabNavigation() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const menuItems = [
    { description: 'Item 0' },
    { description: 'Item 1' },
    { description: 'Item 2' },
  ]

  return (
    <Menu
      aria-label="Simple styled menu"
      maxWidth="30ch"
      display="flex"
      flexDirection="column"
    >
      {menuItems.map((menuItem, index) => {
        const isCurrent = selectedIndex === index
        return (
          <MenuItem key={menuItem.description} display="flex">
            <Link
              onClick={() => setSelectedIndex(index)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setSelectedIndex(index)
                }
              }}
              aria-current={isCurrent}
              sx={{
                backgroundColor: isCurrent ? 'primary' : 'transparent',
                color: isCurrent ? 'white' : 'black',
                px: 7,
                py: 4,
                textDecoration: 'none',
                borderRadius: 'default',
                cursor: 'pointer',
                fontWeight: 'medium',
                '&:hover,&:focus': {
                  color: !isCurrent && 'primary',
                },
              }}
              tabIndex={0}
            >
              {menuItem.description}
            </Link>
          </MenuItem>
        )
      })}
    </Menu>
  )
}
