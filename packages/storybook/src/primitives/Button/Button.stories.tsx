import * as React from 'react'
import { component, variant } from 'kodiak-ui'
import { Button } from '@kodiak-ui/primitives'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

component('button', {
  appearance: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 2,
  lineHeight: 'input',
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

export function initial({ label, ...props }) {
  return (
    <Button base={['button', 'link']} {...props}>
      {label ? label : 'Button styled with text underlined like a link'}
    </Button>
  )
}

export function Variant({ label, ...props }) {
  return (
    <>
      <Button variants={['lg', 'danger']} sx={{ mr: 2 }}>
        Default
      </Button>
      <Button variants="secondary" {...props}>
        {label ? label : 'Secondary button'}
      </Button>
    </>
  )
}
