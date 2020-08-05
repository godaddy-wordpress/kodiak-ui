import * as React from 'react'
import { Stat } from '@kodiak-ui/data-visualization'
import { SvgIcon } from '@material-ui/core'
import { Box, Grid } from '@kodiak-ui/primitives'

export default { title: 'Data Visualization/Stat' }

function AudienceIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path
        d="M11.5002 9.45834C10.9706 9.45845 10.448 9.57977 9.97248 9.81301C9.93596 9.83089 9.90358 9.85621 9.87743 9.88735C9.85127 9.91848 9.83192 9.95474 9.8206 9.99379C9.80929 10.0328 9.80626 10.0738 9.81172 10.1141C9.81718 10.1544 9.83101 10.1931 9.85231 10.2278C10.3576 11.0489 10.6251 11.9942 10.6252 12.9584C10.6252 13.0357 10.656 13.1099 10.7107 13.1646C10.7654 13.2193 10.8395 13.25 10.9169 13.25H14.7086C14.7859 13.25 14.8601 13.2193 14.9148 13.1646C14.9695 13.1099 15.0002 13.0357 15.0002 12.9584C15.0002 12.0301 14.6315 11.1399 13.9751 10.4835C13.3187 9.82709 12.4285 9.45834 11.5002 9.45834Z"
        fill="currentColor"
      />
      <path
        d="M11.4673 9.16669C12.6754 9.16669 13.6548 8.18731 13.6548 6.97919C13.6548 5.77106 12.6754 4.79169 11.4673 4.79169C10.2592 4.79169 9.27979 5.77106 9.27979 6.97919C9.27979 8.18731 10.2592 9.16669 11.4673 9.16669Z"
        fill="currentColor"
      />
      <path
        d="M5.37484 8.29167C6.90513 8.29167 8.14567 7.05113 8.14567 5.52084C8.14567 3.99055 6.90513 2.75 5.37484 2.75C3.84455 2.75 2.604 3.99055 2.604 5.52084C2.604 7.05113 3.84455 8.29167 5.37484 8.29167Z"
        fill="currentColor"
      />
      <path
        d="M9.75001 12.9584C9.75001 11.798 9.28907 10.6852 8.4686 9.86475C7.64813 9.04428 6.53533 8.58334 5.375 8.58334C4.21468 8.58334 3.10188 9.04428 2.28141 9.86475C1.46094 10.6852 1 11.798 1 12.9584C1 13.0357 1.03073 13.1099 1.08543 13.1646C1.14013 13.2193 1.21431 13.25 1.29167 13.25H9.45834C9.5357 13.25 9.60988 13.2193 9.66458 13.1646C9.71928 13.1099 9.75001 13.0357 9.75001 12.9584Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export function Static() {
  return (
    <Grid sx={{ gap: 4 }}>
      <Stat
        icon={
          <Box variant="avatar" sx={{ bg: 'blue.1', p: 2, color: '#0076D1' }}>
            <AudienceIcon />
          </Box>
        }
        label="Audience"
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
