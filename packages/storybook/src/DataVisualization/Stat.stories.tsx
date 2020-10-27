import * as React from 'react'
import { Stat } from '@kodiak-ui/data-visualization'
import { Box, Grid } from '@kodiak-ui/primitives'
import { AudienceIcon } from './AudienceIcon'

export default { title: 'Data Visualization/Stat', component: Stat }

export function StatSample() {
  return (
    <Grid sx={{ gap: 4 }}>
      <Stat
        icon={
          <Box variant="avatar" sx={{ bg: 'blue.1', p: 2, color: '#0076D1' }}>
            <AudienceIcon />
          </Box>
        }
        label={<span>Audience</span>}
      >
        739 Contacts
      </Stat>

      <Stat
        icon={
          <Box variant="avatar" sx={{ bg: 'green.1', p: 2, color: 'green.3' }}>
            <AudienceIcon />
          </Box>
        }
        label="Sales"
      >
        $5,297.00
      </Stat>

      <Stat
        icon={
          <Box variant="avatar" sx={{ bg: 'pink.1', p: 2, color: 'pink.3' }}>
            <AudienceIcon />
          </Box>
        }
        label="CTOR"
      >
        77.27%
      </Stat>

      <Stat label="CTOR">No icon</Stat>
    </Grid>
  )
}
