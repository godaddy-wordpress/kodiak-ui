import * as React from 'react'
import { Text, Flex, Box } from '@kodiak-ui/primitives'
import { useKodiakUi } from 'kodiak-ui'

export default {
  title: 'Design System/Spacing',
}

export function Intro() {
  return <Text sx={{ p: 4 }}>Spacing as defined for padding and margins.</Text>
}

export function Spacing() {
  const { theme } = useKodiakUi()

  if (!Array.isArray(theme.space)) {
    return null
  }

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Spacing</th>
            <th>Sample</th>
          </tr>
        </thead>
        {theme.space?.map((spacing, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{spacing}</td>
              <td>
                <Box
                  sx={{ bg: 'primary', height: 12, my: 2, width: spacing }}
                />
              </td>
            </tr>
          )
        })}
      </table>
    </Flex>
  )
}
