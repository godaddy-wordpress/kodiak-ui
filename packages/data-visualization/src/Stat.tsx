import * as React from 'react'
import { Box, Label, Grid } from '@kodiak-ui/primitives'
import { SxStyleProp } from '@kodiak-ui/core'

type Props = {
  value?: number
  label?: React.ReactNode
  icon?: React.ReactNode
  containerVariant?: string
  barVariant?: string
  sx?: SxStyleProp
  children?: React.ReactNode
} & React.ComponentPropsWithRef<typeof Box>

export function Stat({ value, label, children, icon, ...props }: Props) {
  return (
    <Box
      __base={{
        borderRadius: 'default',
      }}
      variant={'dataVisualization'}
      variantKey="stat"
      {...props}
    >
      {icon}
      <Grid>
        <Label>{label}</Label>
        {children}
      </Grid>
    </Box>
  )
}
