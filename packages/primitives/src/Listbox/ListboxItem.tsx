import * as React from 'react'
import { PropsWithChildren } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '..'

export function ListboxItem(props: PropsWithChildren<KodiakUIProps>) {
  return <Box as="li" {...props} />
}
