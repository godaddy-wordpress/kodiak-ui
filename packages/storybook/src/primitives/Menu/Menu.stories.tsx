import * as React from 'react'
import { Menu, MenuItem } from '@kodiak-ui/primitives'

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
  ]

  type StyledMenuItemProps = React.ComponentProps<typeof MenuItem>

  function StyledMenuItem({
    isCurrent,
    children,
    sx,
    ...props
  }: StyledMenuItemProps) {
    return (
      <MenuItem
        borderLeftWidth="4px"
        borderLeftStyle="solid"
        borderLeftColor={isCurrent ? 'blue.1' : 'transparent'}
        backgroundColor={isCurrent ? 'sky.1' : 'transparent'}
        sx={{
          cursor: 'pointer',
          ...sx,
        }}
        pl={7}
        py={4}
        isCurrent={isCurrent}
        {...props}
      >
        {children}
      </MenuItem>
    )
  }

  return (
    <Menu aria-label="Sample styled menu">
      {menuItems.map((menuItem, index) => (
        <StyledMenuItem
          key={menuItem.description}
          isCurrent={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
          sx={{
            pointerEvents: menuItem.isDisabled ? 'none' : 'auto',
            color: 'ink.2',
            fontWeight: 'medium',
          }}
          href={menuItem.href}
        >
          {menuItem.description}
        </StyledMenuItem>
      ))}
    </Menu>
  )
}
