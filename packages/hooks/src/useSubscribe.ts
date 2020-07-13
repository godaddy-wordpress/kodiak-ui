import * as React from 'react'

type OnMessage = (props?: any) => void

type Subscriptions = {
  [key: string]: OnMessage[]
}

const subscriptions: Subscriptions = {}

export function subscribe<T>(key: string, onMessage: OnMessage) {
  if (!subscriptions[key]) {
    subscriptions[key] = [onMessage]
  } else {
    subscriptions[key].push(onMessage)
  }
}

export function unsubscribe(key: string, onMessage: OnMessage) {
  if (!subscriptions[key]) {
    return
  }

  subscriptions[key] = subscriptions[key].filter(
    subscription => subscription !== onMessage,
  )
}

export function publish<T>(key: string, message: T) {
  subscriptions[key] &&
    subscriptions[key].forEach(subscription => {
      subscription(message)
    })
}

export function useSubscribe<TMessage>(
  {
    key,
    handler,
  }: {
    key: string
    handler: (message: TMessage) => void
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlerDependencies: readonly any[], // Same type as React.useCallback dependencies
) {
  const callback = React.useCallback(handler, handlerDependencies)

  React.useEffect(() => {
    subscribe(key, callback)
    return () => {
      unsubscribe(key, callback)
    }
  }, [key, callback])
}
