import * as React from 'react'
import { Tag, TagDismiss, TagWithButton, SvgIcon } from '@kodiak-ui/primitives'
import { variant } from 'kodiak-ui'

export default { title: 'Primitives/Tag', component: Tag }

variant('pill', {
  bg: 'white',
  border: '1px solid',
  borderColor: 'gray.4',
  borderRadius: '15px',
  color: 'gray.5',
  fontWeight: 'semiBold',
})

function Icon() {
  return (
    <SvgIcon
      {...{ viewBoxWidth: 14, viewBoxHeight: 14, width: 12, height: 12 }}
    >
      <path d="M8.006 7.079a.11.11 0 0 1 0-.155l4.052-4.052a.656.656 0 1 0-.93-.928l-4.05 4.05a.11.11 0 0 1-.156 0L2.87 1.944a.656.656 0 1 0-.928.928l4.051 4.052a.11.11 0 0 1 0 .155l-4.05 4.052a.657.657 0 0 0 .927.928l4.052-4.053a.11.11 0 0 1 .155 0l4.052 4.053a.656.656 0 1 0 .928-.928L8.006 7.079z" />
    </SvgIcon>
  )
}

export function Initial() {
  return <Tag>Label</Tag>
}

export function Pill() {
  return <Tag variants="pill">Pill Label</Tag>
}

export function Dismiss() {
  return (
    <TagDismiss
      icon={<Icon sx={{ color: 'gray.7' }} />}
      onDismiss={() => alert('dismiss')}
    >
      Dismiss
    </TagDismiss>
  )
}

export function WithButton() {
  return (
    <TagWithButton
      icon={<Icon sx={{ color: 'gray.7' }} />}
      onClick={() => alert('dismiss')}
    >
      2 more
    </TagWithButton>
  )
}
