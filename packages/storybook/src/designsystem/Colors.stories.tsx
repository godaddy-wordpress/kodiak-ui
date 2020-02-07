import * as React from 'react'
import { Text, Flex, Box } from '@kodiak-ui/primitives'
import { useThemeUI } from 'theme-ui'

export default {
  title: 'Design System/Colors',
}

export function Intro() {
  return <Text p={4}>The color palette shows the availble color system</Text>
}

type ColorSwatchProps = {
  color: string
  colorName: string | number
}

function ColorSwatch({ color, colorName }: ColorSwatchProps) {
  return (
    <Flex m={4} mr={9} minWidth="initial">
      <Box
        backgroundColor={color}
        height={96}
        width={96}
        boxShadow="inner"
        borderRadius="default"
      />

      <Flex ml={4} flexDirection="column" justifyContent="center">
        <Box fontWeight="bold">{colorName}</Box>
        <Box color={'grey.5'}>{color}</Box>
      </Flex>
    </Flex>
  )
}

export function Palette() {
  const { theme } = useThemeUI()

  if (theme.colors === undefined) {
    return null
  }

  return (
    <Flex flexDirection="row" flexWrap="wrap" width="100%">
      {Object.keys(theme.colors).map(key => {
        if (Array.isArray(theme?.colors?.[key])) {
          if (!theme?.colors?.[key]) {
            return null
          }

          const colorsArray = theme.colors[key] as string[]
          return (
            <Flex>
              <Text>{key}</Text>
              {colorsArray.map((value, index) => {
                if (colorsArray[index] === null) {
                  return null
                }

                return (
                  <ColorSwatch
                    key={key}
                    color={colorsArray[index]}
                    colorName={`${key}.${index}`}
                  />
                )
              })}
            </Flex>
          )
        }
        if (typeof theme.colors?.[key] === 'string') {
          return (
            <ColorSwatch
              key={key}
              color={theme.colors?.[key]}
              colorName={key}
            />
          )
        }
        return null
      })}
    </Flex>
  )
}
