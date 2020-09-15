import * as React from 'react'
import { variant } from 'kodiak-ui'
import { Button } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Button', component: Button }

export function initial() {
  return <Button>Default button</Button>
}

variant('lg', { p: 4 })
variant('danger', { bg: 'red' })

export function Variant() {
  return (
    <>
      <Button variants={['lg', 'danger']} sx={{ mr: 2 }}>
        Default
      </Button>
      <Button variant="secondary">Secondary button</Button>
    </>
  )
}
