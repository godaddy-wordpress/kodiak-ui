import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { Flex } from '../Flex'
import { Text } from '../Text'

export function useStyles(styles: { [key: string]: SxStyleProp }) {}

export interface EmptyProps {
  illustration?: React.ReactNode
  title: string
  children?: React.ReactNode
}

export function Empty({ illustration, title, children }: EmptyProps) {
  return (
    <Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
      {illustration && illustration}
      {title ? (
        <Text as="span" sx={{ display: 'block', fontSize: 6, mt: 6 }}>
          {title}
        </Text>
      ) : null}
      {children}
    </Flex>
  )
}
