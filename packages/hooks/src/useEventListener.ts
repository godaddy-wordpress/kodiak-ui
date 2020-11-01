import * as React from 'react'
import { useSSR } from './useSSR'

export type AddRemoveListenerType = {
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

export interface OnOffListenerType {
  on(name: string, handler: (event?: any) => void, ...args: any[]): any
  off(name: string, handler: (event?: any) => void, ...args: any[]): any
}

export type UseEventListenerTarget = AddRemoveListenerType | OnOffListenerType

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
  target?: null | T | Window
  options?: Parameters<AddEventListener<T>>[2]
}

export function useEventListener<T extends UseEventListenerTarget>({
  name,
  handler,
  target: targetProp,
  options,
}: UseEventListenerOptions<T>) {
  const { isServer } = useSSR()

  React.useEffect(
    function attachEventListeners() {
      if (isServer) {
        return
      }

      const target = targetProp ? targetProp : window

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
    [name, handler, options, isServer, targetProp],
  )
}
