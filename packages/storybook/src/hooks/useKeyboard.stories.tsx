import * as React from 'react'
import { useKeyboard } from '@kodiak-ui/hooks'
import { Box, Input } from '@kodiak-ui/primitives'

export default { title: 'Hooks/useKeyboard' }

export function FocusEvent() {
  const [events, setEvents] = React.useState<string[]>([])

  const { getKeyboardProps } = useKeyboard({
    onKeyUp: e => setEvents(events => [`key down: ${e.key}`, ...events]),
    onKeyDown: e => setEvents(events => [`key up: ${e.key}`, ...events]),
  })

  return (
    <>
      <Input
        {...getKeyboardProps()}
        aria-label="useKeyboard example"
        placeholder="Type in me to log event."
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
