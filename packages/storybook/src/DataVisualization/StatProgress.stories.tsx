import * as React from 'react'
import { StatProgress } from '@kodiak-ui/data-visualization'
import { Grid } from '@kodiak-ui/primitives'

export default { title: 'Data Visualization/StatProgress' }

export function StatProgressSample() {
  const [animatedValue, setAnimatedValue] = React.useState(0)

  React.useEffect(() => {
    setAnimatedValue(99)
  }, [])

  return (
    <Grid sx={{ gap: 4 }}>
      <StatProgress
        label={'Opened - 17%'}
        labelRight={'132 opens'}
        min={0}
        max={100}
        value={17}
      />
      <StatProgress
        color={'red.3'}
        label={'Opened - 10%'}
        labelRight={'132 opens'}
        min={0}
        max={100}
        value={10}
      />
      <StatProgress
        color={'green.3'}
        label={'Animated 99%'}
        labelRight={'99 percent awesome'}
        min={0}
        max={100}
        progressSx={{
          transition: 'all 0.5s ease-out 0s',
        }}
        value={animatedValue}
      />
    </Grid>
  )
}
