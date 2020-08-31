import * as React from 'react'
import { VariantProps } from '@kodiak-ui/core'
import { Tag } from './Tag'
import { TagLabel } from './TagLabel'
import { Button } from '../Button'

export type TagWithButtonProps = {
  children: React.ReactNode
  icon: React.ReactNode
  onClick: () => void
} & VariantProps

export const TagWithButton = React.forwardRef(function TagWithButton(
  { children, icon, onClick }: TagWithButtonProps,
  ref: React.MutableRefObject<any>,
) {
  return (
    <Tag sx={{ p: 0 }}>
      <TagLabel sx={{ borderRight: '1px solid', borderColor: 'muted' }}>
        {children}
      </TagLabel>
      <Button
        ref={ref}
        variantKey="tags"
        variant="tagButton" // TODO: These variants aren't working for some reason
        onClick={onClick}
        __base={{
          alignItems: 'center',
          border: 'none',
          bg: 'gray.1',
          color: 'gray.7',
          display: 'flex',
          px: 0,
          py: 0,
        }}
      >
        {icon}
      </Button>
    </Tag>
  )
})
