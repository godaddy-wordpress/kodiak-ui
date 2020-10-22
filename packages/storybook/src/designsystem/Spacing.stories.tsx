import * as React from 'react'
import { Text, Flex, Box } from '@kodiak-ui/primitives'
import { Styled } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

export default {
  title: 'Design System/Spacing',
}

export function Intro() {
  return <Text sx={{ p: 4 }}>Spacing as defined for padding and margins.</Text>
}

export function Spacing() {
  const { theme } = useThemeUI()

  if (!Array.isArray(theme.space)) {
    return null
  }

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Styled.table>
        <thead>
          <Styled.tr>
            <Styled.th>Index</Styled.th>
            <Styled.th>Spacing</Styled.th>
            <Styled.th>Sample</Styled.th>
          </Styled.tr>
        </thead>
        {theme.space?.map((spacing, index) => {
          return (
            <tr key={index}>
              <Styled.td>{index}</Styled.td>
              <Styled.td>{spacing}</Styled.td>
              <Styled.td>
                <Box
                  sx={{ bg: 'primary', height: 12, my: 2, width: spacing }}
                />
              </Styled.td>
            </tr>
          )
        })}
      </Styled.table>
    </Flex>
  )
}
