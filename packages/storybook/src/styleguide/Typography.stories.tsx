import * as React from 'react'
import { Box, Text, Flex } from '@kodiak/primitives'
import { theme } from '../theme'

type TypographyExampleProps = React.PropsWithChildren<{
  size: number
}>
export function Typography() {
  return (
    <Text p={4}>
      Typography is the art and technique of arranging type to make written
      language legible, readable, and appealing when displayed.
    </Text>
  )
}

export function FontFamily() {
  return (
    <Flex flexDirection="column">
      <Box color="grey.6">
        {Object.keys(theme.fonts).map((fontsKey, index) => {
          const fontFamily =
            theme.fonts[fontsKey as keyof typeof theme['fonts']]

          return (
            <Text key={index} fontFamily={fontFamily}>
              {fontsKey}{' '}
              <Text as="span" color="grey.4">
                ({fontFamily})
              </Text>
            </Text>
          )
        })}
      </Box>
    </Flex>
  )
}

export function FontWeight() {
  return (
    <Flex flexDirection="column">
      <Box color="grey.6">
        {Object.keys(theme.fontWeights).map((fontWeightKey, index) => {
          const fontWeight =
            theme.fontWeights[
              fontWeightKey as keyof typeof theme['fontWeights']
            ]

          return (
            <Text key={index} fontWeight={fontWeight}>
              {fontWeightKey}{' '}
              <Text as="span" color="grey.4">
                ({fontWeight})
              </Text>
            </Text>
          )
        })}
      </Box>
    </Flex>
  )
}

function TypographyExample({ size, children }: TypographyExampleProps) {
  return (
    <Flex
      mt={4}
      sx={{
        whiteSpace: 'nowrap',
      }}
      flexDirection="column"
      alignItems="baseline"
    >
      <Text fontSize={1} color="grey.4">
        {size}
      </Text>
      <Text fontSize={size}>{children}</Text>
    </Flex>
  )
}

export function Sizing() {
  return (
    <Flex flexDirection="column">
      <Box>
        {theme.fontSizes.map((fontSize, index) => (
          <TypographyExample size={fontSize} key={index}>
            Email marketing built for eCommerce stores.
          </TypographyExample>
        ))}
      </Box>
    </Flex>
  )
}

export default {
  title: 'Design System/Typography',
}
