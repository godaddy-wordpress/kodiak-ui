import { KodiakUIProps } from 'kodiak-ui'
import React from 'react'
import { Box } from '../Box'

export function Underlay({
  isOpen,
  base,
  ...props
}: { isOpen?: boolean } & KodiakUIProps) {
  return (
    <Box
      __base={{
        bg: 'rgba(0,0,0,0.4)',
        transitionDelay: '0ms',
        pointerEvents: 'auto',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'opacity 0.13s cubic-bezier(0, 0, 0.4, 1)',
      }}
      base={base ? base : 'underlay'}
      {...props}
    />
  )
}
