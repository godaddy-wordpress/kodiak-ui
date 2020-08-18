import * as React from 'react'
import {
  Nav,
  NavItem,
  Link,
  VisuallyHidden,
  Box,
  SvgIcon,
  Flex,
} from '@kodiak-ui/primitives'

export default { title: 'Primitives/Nav', component: Nav }

export function Basic() {
  return (
    <Nav aria-label="Basic menu">
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
      <NavItem>Item 3</NavItem>
    </Nav>
  )
}

export function SampleStyledNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const menuItems = [
    { description: 'Item 0' },
    { description: 'Item 1' },
    { description: 'Item 2 (disabled)', isDisabled: true },
    { description: 'Item 3', href: '#' },
    { description: 'External link', href: 'https://jilt.com' },
  ]

  return (
    <Nav aria-label="Sample styled menu">
      {menuItems.map((menuItem, index) => {
        const isCurrent = selectedIndex === index
        return (
          <NavItem
            borderLeftWidth="4px"
            borderLeftStyle="solid"
            borderLeftColor={isCurrent ? 'blue.4' : 'transparent'}
            backgroundColor={isCurrent ? 'sky.1' : 'transparent'}
            pl={7}
            py={4}
            key={menuItem.description}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event: any) => {
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
          </NavItem>
        )
      })}
    </Nav>
  )
}

export function SimplePillNavWithTabNavigation() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const menuItems = [
    { description: 'Item 0' },
    { description: 'Item 1' },
    { description: 'Item 2' },
  ]

  return (
    <Nav
      aria-label="Simple styled menu"
      maxWidth="30ch"
      display="flex"
      flexDirection="column"
    >
      {menuItems.map((menuItem, index) => {
        const isCurrent = selectedIndex === index
        return (
          <NavItem key={menuItem.description} display="flex">
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
                  ...(!isCurrent && { color: 'primary' }),
                },
              }}
              tabIndex={0}
            >
              {menuItem.description}
            </Link>
          </NavItem>
        )
      })}
    </Nav>
  )
}

function IconHamburger() {
  return (
    <SvgIcon
      title="menu"
      sx={{
        color: 'gray.6',
      }}
      height={24}
      width={24}
      viewBox="0 0 24 24"
    >
      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
    </SvgIcon>
  )
}

function IconClose() {
  return (
    <SvgIcon
      title="menu"
      sx={{
        color: 'gray.6',
      }}
      height={24}
      width={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7.15 6.088a.125.125 0 010-.177l4.63-4.63A.75.75 0 0010.72.22l-4.63 4.628a.125.125 0 01-.178 0L1.281.22A.75.75 0 00.22 1.28l4.63 4.631a.125.125 0 010 .177L.22 10.72a.75.75 0 101.06 1.06l4.631-4.63a.125.125 0 01.177 0l4.63 4.63a.75.75 0 101.062-1.06L7.15 6.09z"
      />
    </SvgIcon>
  )
}

export function HorizontalNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const navItems = [
    { description: 'Product' },
    { description: 'Pricing' },
    { description: 'Learn' },
    { description: 'Support' },
    { description: 'Log In' },
  ]

  return (
    <Nav variant="horizontal" aria-label="Mobile menu" sx={{ pb: 4 }}>
      {navItems.map((menuItem, index) => {
        return (
          <NavItem
            key={index}
            variant="horizontalNavItem"
            onClick={() => setSelectedIndex(index)}
            sx={{
              color: selectedIndex === index ? 'primary' : 'gray.6',
              '&:hover': {
                color: 'primary',
              },
              '::after': {
                bg: selectedIndex === index ? 'primary' : 'gray.2',
                height: selectedIndex === index ? '2px' : '1px',
              },
            }}
          >
            {menuItem.description}
          </NavItem>
        )
      })}
    </Nav>
  )
}

export function ResponsiveHorizontalNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isNavOpen, setIsNavOpen] = React.useState(true)
  const menuItems = [
    { description: 'Product' },
    { description: 'Pricing' },
    { description: 'Learn' },
    { description: 'Support' },
    { description: 'Log In', isPrimary: true },
  ]

  return (
    <Flex justifyContent="flex-end">
      {/* Mobile */}
      {!isNavOpen && (
        <Link
          display={['inline-flex', 'none']}
          m={4}
          p={1}
          onClick={() => setIsNavOpen(!isNavOpen)}
          sx={{ cursor: 'pointer' }}
        >
          <IconHamburger />
        </Link>
      )}

      {isNavOpen && (
        <Box display={['block', 'none']} boxShadow="md">
          <Flex justifyContent="flex-end">
            <Link
              m={4}
              p={1}
              onClick={() => setIsNavOpen(!isNavOpen)}
              sx={{ cursor: 'pointer' }}
            >
              <IconClose />
            </Link>
          </Flex>
          <Box width="99vw">
            <Nav aria-label="Mobile menu" pb={4}>
              {menuItems.map((menuItem, index) => {
                return (
                  <NavItem
                    key={index}
                    pl={5}
                    py={3}
                    onClick={() => setSelectedIndex(index)}
                    sx={{
                      cursor: 'pointer',
                      color: menuItem.isPrimary ? 'primary' : 'ink.2',
                      fontWeight: 'medium',
                      '&:hover,&:focus': {
                        color: 'cyan.3',
                      },
                    }}
                  >
                    {menuItem.description}
                  </NavItem>
                )
              })}
            </Nav>
          </Box>
        </Box>
      )}

      {/* Full screen */}
      <Nav
        aria-label="Simple styled menu"
        display={[false ? 'flex' : 'none', 'flex']}
        sx={{
          flexDirection: [isNavOpen && 'column', 'row'],
        }}
        justifyContent="flex-end"
        alignItems="center"
      >
        {menuItems.map((menuItem, index) => {
          const isCurrent = selectedIndex === index
          return (
            <NavItem key={menuItem.description} sx={{ pl: 6, py: 4 }}>
              <Link
                onClick={() => setSelectedIndex(index)}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setSelectedIndex(index)
                  }
                }}
                aria-current={isCurrent}
                sx={{
                  textDecoration: 'none',
                  borderRadius: 'default',
                  cursor: 'pointer',
                  fontWeight: 'medium',
                  color: menuItem.isPrimary ? 'primary' : 'ink.1',
                  '&:hover,&:focus': {
                    color: 'cyan.3',
                  },
                }}
                tabIndex={0}
              >
                {menuItem.description}
              </Link>
            </NavItem>
          )
        })}
      </Nav>
    </Flex>
  )
}
