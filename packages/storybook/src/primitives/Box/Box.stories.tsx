import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Box', component: Box }

export function initial() {
  return (
    <Box
      sx={{
        fontFamily: 'body',
        fontWeight: 'bold',
        padding: 5,
      }}
    >
      Basic Box that renders a Div
    </Box>
  )
}

function CustomComponent({
  customMessage,
  ...props
}: {
  customMessage: string
}) {
  return <div {...props}>{customMessage}</div>
}

export function AsProp() {
  const aRef = React.useRef<HTMLAnchorElement>(null)
  return (
    <Box>
      <Box
        as="main"
        sx={{
          fontFamily: 'body',
          fontWeight: 'bold',
          padding: 5,
        }}
      >
        Renders the Box as a Main HTML element
      </Box>
      <Box
        as="a"
        href="#"
        sx={{ textDecoration: 'underline', padding: 5 }}
        ref={aRef}
      >
        This is a Box as an anchor tag and a Ref
      </Box>
      <Box
        as={CustomComponent}
        sx={{ color: 'primary', p: 5 }}
        customMessage={'Custom components can be wrapped and styled as a box'}
      />
    </Box>
  )
}
