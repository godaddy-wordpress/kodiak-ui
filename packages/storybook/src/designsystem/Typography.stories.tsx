import * as React from 'react'
import { Box, Text, Flex } from '@kodiak-ui/primitives'
import { useThemeUI } from 'theme-ui'

export default {
  title: 'Design System/Typography',
}

export function Intro() {
  return (
    <Text sx={{ p: 4 }}>
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
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ color: 'gray.7' }}>
        {Object.keys(theme?.fonts).map((fontsKey, index) => {
          const fontFamily =
            theme.fonts?.[fontsKey as keyof typeof theme['fonts']]

          return (
            <Text key={index} sx={{ fontFamily: fontFamily as any }}>
              {fontsKey}{' '}
              <Text as="span" sx={{ color: 'gray.5 ' }}>
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
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ color: 'gray.7' }}>
        {Object.keys(theme.fontWeights).map((fontWeightKey, index) => {
          const fontWeight =
            theme.fontWeights?.[
              fontWeightKey as keyof typeof theme['fontWeights']
            ]

          return (
            <Text key={index} sx={{ fontWeight: fontWeight as any }}>
              {fontWeightKey}{' '}
              <Text as="span" sx={{ color: 'gray.5' }}>
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
  size: any
}>

function TypographyExample({ size, children }: TypographyExampleProps) {
  return (
    <Flex
      sx={{
        alignItems: 'baseline',
        flexDirection: 'column',
        mt: 4,
        whiteSpace: 'nowrap',
      }}
    >
      <Text sx={{ fontSize: 1, color: 'gray.5' }}>{size}</Text>
      <Text sx={{ fontSize: size }}>{children}</Text>
    </Flex>
  )
}

export function Sizing() {
  const { theme } = useThemeUI()

  if (!Array.isArray(theme.fontSizes)) {
    return
  }

  return (
    <Flex sx={{ flexDirection: 'column' }}>
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
