import * as React from 'react'
import {
  createMachine,
  interpret,
  assign,
  EventObject,
  Typestate,
  StateMachine,
} from '@xstate/fsm'
import { useConstant } from '@kodiak-ui/hooks'

export function useMachine<
  TContext extends object,
  TEvent extends EventObject,
  TState extends Typestate<TContext> = any
>(
  initialMachine: StateMachine.Machine<TContext, TEvent, TState>,
): [
  StateMachine.State<TContext, TEvent, TState>,
  StateMachine.Service<TContext, TEvent>['send'],
  StateMachine.Service<TContext, TEvent>,
] {
  const { current: machine } = React.useRef(initialMachine)
  const service = useConstant(() => interpret(machine).start())
  const [current, setCurrent] = React.useState<
    StateMachine.State<TContext, TEvent, TState>
  >(machine.initialState)

  const send = React.useCallback(
    (event: TEvent | TEvent['type']) => {
      service.send(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(
    () => {
      service.subscribe(setCurrent)

      return () => {
        service.stop()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return [current, send, service]
}

enum SelectStates {
  Idle = 'IDLE',
  Navigating = 'NAVIGATING',
}

enum SelectEvents {
  ButtonMouseDown = 'BUTTON_MOUSE_DOWN',
}

type SelectContext = {
  active: boolean
  value: string | null
  options: string[]
}

type SelectEvent = { type: SelectEvents.ButtonMouseDown; active: boolean }

type SelectState =
  | { value: 'idle'; context: SelectContext }
  | { value: 'navigating'; context: SelectContext & { active: boolean } }

type SelectStateData = {
  active: boolean
  value: string | null
}

interface UseSelectProps {
  value?: string
}

const setListActive = assign<SelectStateData, any>({
  active: (_, event) => {
    return event.active
  },
})

export function useSelect({
  value,
}: UseSelectProps): {
  current: StateMachine.State<SelectContext, SelectEvent, SelectState>
  handleMouseDown: (event: React.MouseEvent) => void
} {
  const machine = useConstant(() =>
    createMachine<SelectContext, SelectEvent, SelectState>({
      id: 'select',
      initial: SelectStates.Idle,
      context: { active: false, value: value || null, options: [] },
      states: {
        [SelectStates.Idle]: {
          on: {
            [SelectEvents.ButtonMouseDown]: {
              target: SelectStates.Navigating,
              actions: [setListActive],
            },
          },
        },
        [SelectStates.Navigating]: { on: {} },
      },
    }),
  )

  const [current, send, service] = useMachine<
    SelectContext,
    SelectEvent,
    SelectState
  >(machine)

  const handleMouseDown = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      send({ type: SelectEvents.ButtonMouseDown, active: true })
    },
    [send],
  )

  return { current, handleMouseDown }
}
