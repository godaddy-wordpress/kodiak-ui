import * as React from 'react'
import { Box, Text, Flex } from '@kodiak-ui/primitives'
import { useThemeUI } from 'theme-ui'
import { FontSizeProperty } from 'csstype'

export default {
  title: 'Design System/Typography',
}

export function Intro() {
  return (
    <Text p={4}>
      Typography is the art and technique of arranging type to make written
      language legible, readable, and appealing when displayed.
    </Text>
  )
}

export function FontFamily() {
  const { theme } = useThemeUI()

  if (!theme.fonts) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Box color="gray.7">
        {Object.keys(theme?.fonts).map((fontsKey, index) => {
          const fontFamily =
            theme.fonts?.[fontsKey as keyof typeof theme['fonts']]

          return (
            <Text key={index} fontFamily={fontFamily}>
              {fontsKey}{' '}
              <Text as="span" color="gray.5">
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
  const { theme } = useThemeUI()

  if (!theme.fontWeights) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Box color="gray.7">
        {Object.keys(theme.fontWeights).map((fontWeightKey, index) => {
          const fontWeight =
            theme.fontWeights?.[
              fontWeightKey as keyof typeof theme['fontWeights']
            ]

          return (
            <Text key={index} fontWeight={fontWeight}>
              {fontWeightKey}{' '}
              <Text as="span" color="gray.5">
                ({fontWeight})
              </Text>
            </Text>
          )
        })}
      </Box>
    </Flex>
  )
}

type TypographyExampleProps = React.PropsWithChildren<{
  size: FontSizeProperty<string | number>
}>

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
      <Text fontSize={1} color="gray.5">
        {size}
      </Text>
      <Text fontSize={size}>{children}</Text>
    </Flex>
  )
}

export function Sizing() {
  const { theme } = useThemeUI()

  if (!Array.isArray(theme.fontSizes)) {
    return
  }

  return (
    <Flex flexDirection="column">
      <Box>
        {theme.fontSizes?.map((fontSize, index) => (
          <TypographyExample size={fontSize} key={index}>
            Email marketing built for eCommerce stores.
          </TypographyExample>
        ))}
      </Box>
    </Flex>
  )
}
