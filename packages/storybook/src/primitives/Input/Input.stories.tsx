import * as React from 'react'
import {
  Input,
  InputGroup,
  InputAddon,
  Flex,
  Box,
  Text,
} from '@kodiak-ui/primitives'

export default { title: 'Forms/Input', component: Input }

export function Initial() {
  return <Input placeholder="Type something..."></Input>
}

export function Shadow() {
  return (
    <Input variant="shadow" placeholder="Input with shadow variant"></Input>
  )
}

export function Inline() {
  return (
    <Input variant="inline" placeholder="Input with inline variant"></Input>
  )
}

export function Underline() {
  return (
    <Input
      variant="underline"
      placeholder="Input with underline variant"
    ></Input>
  )
}

export function Disabled() {
  return (
    <Input variant="disabled" placeholder="Disabled input" disabled></Input>
  )
}

export function Password() {
  return <Input type="password" placeholder="Password" />
}

export function WithIcon() {
  return (
    <Flex
      alignItems="center"
      border="1px solid"
      borderColor="text"
      borderRadius="default"
    >
      <Box ml={4}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          style={{
            display: 'block',
          }}
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Box>
      <Input variant="shadow" placeholder="Shadowed input with icon"></Input>
    </Flex>
  )
}

export function InputAddons() {
  return (
    <>
      <InputGroup sx={{ mb: 4 }}>
        <InputAddon>
          <Text as="span">$</Text>
        </InputAddon>
        <Input variant="shadow" placeholder="Name" />
      </InputGroup>

      <InputGroup sx={{ mb: 4 }}>
        <Input variant="shadow" placeholder="Name" />
        <InputAddon position="right">
          <Text as="span">.00</Text>
        </InputAddon>
      </InputGroup>

      <InputGroup>
        <InputAddon position="left">
          <Text as="span">$</Text>
        </InputAddon>
        <Input variant="shadow" placeholder="Name" />
        <InputAddon position="right">
          <Text as="span">.00</Text>
        </InputAddon>
      </InputGroup>
    </>
  )
}
