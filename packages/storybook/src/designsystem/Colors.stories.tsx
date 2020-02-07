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
} & React.ComponentProps<typeof Flex>

function ColorSwatch({ color, colorName, ...props }: ColorSwatchProps) {
  return (
    <Flex m={4} mr={9} minWidth="initial" flex="1" {...props}>
      <Box
        backgroundColor={color}
        height={96}
        width={96}
        boxShadow="lg"
        borderRadius="default"
      />

      <Flex ml={4} flexDirection="column" justifyContent="center">
        <Box fontWeight="bold">{colorName}</Box>
        <Box color={'grey.5'}>{color}</Box>
      </Flex>
    </Flex>
  )
}

type ColorSwatchesProps = {
  colorsArray: string[]
  colorName: string | number
} & React.ComponentProps<typeof Flex>

function ColorSwatches({ colorsArray, colorName }: ColorSwatchesProps) {
  // Would be nice to choose this by darkest color, maybe use d3.hsl to compare lightness
  // since ideally this would support different string color formats
  // or if convention is lightest to darkest we could take the last color
  const borderLeftColor = colorsArray.find(color => !!color)

  return (
    <Flex flexDirection="column" key={colorName} width="100%">
      <Box borderLeft="2px solid" borderLeftColor={borderLeftColor} mt={8}>
        <Text
          ml={3}
          variant="text.heading"
          sx={{ textTransform: 'capitalize' }}
        >
          {colorName}
        </Text>
      </Box>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {colorsArray.map((value, index) => {
          if (colorsArray[index] === null) {
            return null
          }

          return (
            <ColorSwatch
              key={`${colorName}.${index}`}
              color={value}
              colorName={`${colorName}.${index}`}
              pt={4}
            />
          )
        })}
      </Box>
    </Flex>
  )
}

export function Palette() {
  const { theme } = useThemeUI()

  if (theme.colors === undefined) {
    return null
  }

  return (
    <Flex flexDirection="column" flexWrap="wrap">
      {Object.keys(theme.colors).map(key => {
        if (Array.isArray(theme?.colors?.[key])) {
          if (!theme?.colors?.[key] || key === 'grey') {
            return null
          }

          const colorsArray = theme.colors[key] as string[]
          return <ColorSwatches colorsArray={colorsArray} colorName={key} />
        }

        if (typeof theme.colors?.[key] === 'string') {
          return (
            <ColorSwatch
              key={key}
              color={theme.colors?.[key]}
              colorName={key}
              borderTop="1px solid"
              borderTopColor="gray.2"
              pt={4}
            />
          )
        }

        return null
      })}
    </Flex>
  )
}
