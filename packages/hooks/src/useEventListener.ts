import * as React from 'react'

interface AddRemoveListenerType {
  addEventListener(
    name: string,
    handler: (event?: any) => void,
    ...args: any[]
  ): any
  removeEventListener(
    name: string,
    handler: (event?: any) => void,
    ...args: any[]
  ): any
}

interface OnOffListenerType {
  on(name: string, handler: (event?: any) => void, ...args: any[]): any
  off(name: string, handler: (event?: any) => void, ...args: any[]): any
}

export type UseEventListenerTarget = AddRemoveListenerType | OnOffListenerType

const defaultTarget = window

function isAddRemoveListenerType(target: any): target is AddRemoveListenerType {
  return !!target.addEventListener
}

function isOnOffListenerType(target: any): target is OnOffListenerType {
  return !!target.on
}

type AddEventListener<T> = T extends AddRemoveListenerType
  ? T['addEventListener']
  : T extends OnOffListenerType
  ? T['on']
  : never

interface UseEventListenerOptions<T> {
  name: Parameters<AddEventListener<T>>[0]
  handler?: null | undefined | Parameters<AddEventListener<T>>[1]
  target: null | T | Window
  options?: Parameters<AddEventListener<T>>[2]
}

export function useEventListener<T extends UseEventListenerTarget>({
  name,
  handler,
  target = defaultTarget,
  options,
}: UseEventListenerOptions<T>) {
  React.useEffect(
    function attachEventListeners() {
      if (!handler || !target) {
        return
      }

      if (isAddRemoveListenerType(target)) {
        target.addEventListener(name, handler, options)
      } else if (isOnOffListenerType(target)) {
        target.on(name, handler, options)
      }

      return () => {
        if (isAddRemoveListenerType(target)) {
          target.removeEventListener(name, handler, options)
        } else if (isOnOffListenerType(target)) {
          target.off(name, handler, options)
        }
      }
    },
    [name, handler, target, options],
  )
}
