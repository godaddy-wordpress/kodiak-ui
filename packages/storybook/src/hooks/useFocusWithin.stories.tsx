import * as React from 'react'
import { useFocusWithin } from '@kodiak-ui/hooks'
import { Box, Input } from '@kodiak-ui/primitives'

export default { title: 'Hooks/useFocusWithin' }

export function FocusEvent() {
  const [events, setEvents] = React.useState([])

  const { isFocusWithin, getFocusProps } = useFocusWithin({
    onFocus: () => setEvents(events => [...events, 'focus']),
    onBlur: () => setEvents(events => [...events, 'blur']),
  })

  return (
    <>
      <Box
        {...getFocusProps()}
        sx={{ bg: isFocusWithin ? 'goldenrod' : 'transparent' }}
      >
        <Input
          aria-label="useFocusWithin example"
          placeholder="Focus on me to log event."
        />
        <Input
          aria-label="useFocusWithin example"
          placeholder="Focus on me to log event."
        />
      </Box>
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
