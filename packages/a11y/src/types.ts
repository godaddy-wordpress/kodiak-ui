import { PropsWithChildren } from 'react'

export type FocusScopeProps = PropsWithChildren<{
  contain?: boolean
  restore?: boolean
  autoFocus?: boolean
}>

export type FocusScopeOptions = {
  from?: HTMLElement
  tabbable?: boolean
}
