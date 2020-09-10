---
id: use-event-logger
title: useEventLogger
sidebar_label: useEventLogger
---

import CodeBlock from '@theme/CodeBlock'

The event logger provides a way to track a set of events.

```tsx
import {
  useEventLoggerReducers,
  useEventLogger,
} from '@kodiak-ui/hooks/use-event-logger'

function ComponentThatLogs() {
  const logEvent = useEventLogger()

  return (
    <button
      onClick={e =>
        logEvent({
          name: 'CLICK',
          payload: e.target?.getAttribute('aria-label'),
        })
      }
      aria-label="Logging button"
    >
      Logging button
    </button>
  )
}

function App() {
  // Setup anything that sends to the log to be logged out
  // this could also be a set transforms before sending to a server
  useEventLoggerReducers({
    initialEventReducers: [
      event => {
        console.log(event)
        return event
      },
    ],
  })

  return (
    <div>
      <ComponentThatLogs />
    </div>
  )
}
```

## More complex example

<CodeBlock className="language-tsx">
  {
    require('!!raw-loader!../../../packages/storybook/src/hooks/useEventLogger.stories.tsx')
      .default
  }
</CodeBlock>
