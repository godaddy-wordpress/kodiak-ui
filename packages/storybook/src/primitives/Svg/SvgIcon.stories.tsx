import * as React from 'react'
import { Flex, Text, SvgIcon } from '@kodiak-ui/primitives'

export default { title: 'Primitives/SvgIcon', component: SvgIcon }

export function SvgIconSample() {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <SvgIcon
        viewBox="0 0 24 24"
        title="Search icon"
        desc="Search magnifying glass icon"
        sx={{
          color: 'primary',
          mr: 2,
          height: '24px',
          width: '24px',
        }}
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </SvgIcon>
      <Text>Adds the title and desc for accessible icons</Text>
    </Flex>
  )
}
