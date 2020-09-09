import * as React from 'react'
import { SxStyleProp } from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives/box'
import { Flex } from '@kodiak-ui/primitives/flex'
import { Grid } from '@kodiak-ui/primitives/grid'
import { Label } from '@kodiak-ui/primitives/label'

type Props = {
  label?: React.ReactNode
  icon?: React.ReactNode
  containerVariant?: string
  barVariant?: string
  sx?: SxStyleProp
  children?: React.ReactNode
} & React.ComponentPropsWithRef<typeof Box>

export function Stat({ label, children, icon, ...props }: Props) {
  return (
    <Grid
      __base={{
        borderRadius: 'default',
        border: '1px solid',
        borderColor: 'gray.2',
        alignItems: 'start',
        gridTemplateColumns: 'max-content auto',
        lineHeight: '16px',
        gap: '4',
        p: 4,
      }}
      variant="dataVisualization"
      variantKey="stats"
      {...props}
    >
      {icon && <Box>{icon}</Box>}
      <Flex sx={{ flexDirection: 'column' }}>
        {typeof label === 'object' ? label : <Label>{label}</Label>}
        <Box sx={{ fontWeight: 'bold', mt: 2, fontSize: 4 }}>{children}</Box>
      </Flex>
    </Grid>
  )
}
