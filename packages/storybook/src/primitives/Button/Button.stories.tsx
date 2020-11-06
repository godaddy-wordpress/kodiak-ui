import * as React from 'react'
import { component, variant } from 'kodiak-ui'
import { Button } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Button', component: Button }

component('button', {
  appearance: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background 0.2s ease-in-out, border 0.2s ease-in-out',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 'default',
  '&:hover': {
    bg: 'black',
  },
})

component('link', {
  textDecoration: 'underline',
})

variant('lg', { p: 4 })
variant('danger', { bg: 'danger' })
variant('secondary', {
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'text',
  color: 'text',
  '&:hover': {
    bg: 'black',
    color: 'white',
  },
})

export function initial() {
  return (
    <Button base={['button', 'link']}>
      Button styled with text underlined like a link
    </Button>
  )
}

export function Variant() {
  return (
    <>
      <Button variants={['lg', 'danger']} sx={{ mr: 2 }}>
        Default
      </Button>
      <Button variants="secondary">Secondary button</Button>
    </>
  )
}
