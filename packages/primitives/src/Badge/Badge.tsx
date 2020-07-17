import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { VariantProps } from '@kodiak-ui/core'
import { Box } from '../Box'
import { Text } from '../Text'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

function getPositionStyles(position: Position): SxStyleProp {
  switch (position) {
    case 'top-right':
      return {
        top: 0,
        right: 0,
        transform: 'translate(50%, -50%)',
        transformOrigin: '100% 0%',
      }

    case 'top-left':
      return {
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        transformOrigin: '100% 0%',
      }

    case 'bottom-right':
      return {
        right: 0,
        bottom: 0,
        transform: 'translate(50%, 50%)',
        transformOrigin: '100% 100%',
      }

    case 'bottom-left':
      return {
        left: 0,
        bottom: 0,
        transform: 'translate(-50%, 50%)',
        transformOrigin: '100% 100%',
      }

    default:
      return {}
  }
}

export type BadgeProps = {
  count: number
  max?: number
  position?: Position
  children: React.ReactNode
} & VariantProps

export const Badge = React.forwardRef(function Badge(
  {
    count: userCount,
    max = 100,
    position = 'top-right',
    variant,
    variantKey = 'badges',
    children,
  }: BadgeProps,
  ref: React.Ref<any>,
) {
  const hasLabel = typeof children === 'string'
  const count = userCount > max ? `${max - 1}+` : `${userCount}`
  let content = <>{count}</>

  if (hasLabel) {
    content = (
      <Text as="span">
        {count} {children}
      </Text>
    )
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexShrink: 0,
        position: 'relative',
        verticalAlign: 'middle',
      }}
    >
      {!hasLabel ? children : null}
      <Box
        ref={ref}
        as="span"
        variant={variant}
        variantKey={variantKey}
        __base={{
          alignContent: 'center',
          alignItems: 'center',
          bg: 'primary',
          borderRadius: '10px',
          color: 'white',
          display: 'inline-flex',
          fontSize: 1,
          height: '20px',
          justifyContent: 'center',
          lineHeight: 1,
          position: hasLabel ? 'static' : 'absolute',
          py: 0,
          px: hasLabel ? 2 : '6px',
          transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          zIndex: 1,
          ...(!hasLabel ? getPositionStyles(position) : null),
        }}
      >
        {content}
      </Box>
    </Box>
  )
})
