import React from 'react'
import { Box } from '../Box'

export function Underlay() {
  return (
    <Box
      __base={{
        opacity: '.9999',
        transitionDelay: '0ms',
        pointerEvents: 'auto',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        overflow: 'hidden',
      }}
    />
  )
}
