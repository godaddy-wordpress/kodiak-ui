import * as React from 'react'
import { useFocus } from '@kodiak-ui/hooks'
import { Box, Input } from '@kodiak-ui/primitives'

export default { title: 'Hooks/useFocus' }

export function FocusEvent() {
  const [events, setEvents] = React.useState([])

  const { getFocusProps } = useFocus({
    onFocus: () => setEvents(events => [...events, 'focus']),
    onBlur: () => setEvents(events => [...events, 'blur']),
  })

  return (
    <>
      <Input
        {...getFocusProps()}
        aria-label="useFocus example"
        placeholder="Focus on me to log event."
      />
      <Box sx={{ maxHeight: '200px', mt: 4, overflow: 'auto' }}>
        <ul>
          {events?.map((event, i) => (
            <li key={i}>{event}</li>
          ))}
        </ul>
      </Box>
    </>
  )
}
