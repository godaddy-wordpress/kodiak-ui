import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { createStateDispatchContext } from '../createStateDispatchContext'

describe('useBeforeUnload', () => {
  it('should create a context that can be used in components', () => {
    type ActionType =
      | { type: 'INCREMENT' }
      | { type: 'DECREMENT' }
      | { type: 'SET_COUNT'; payload: { count: number } }
      | { type: 'RESET' }

    const initialState = {
      count: 0,
    }

    type CounterState = typeof initialState

    function reducer(state: CounterState, action: ActionType) {
      switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            count: state.count + 1,
          }
        case 'DECREMENT':
          return {
            ...state,
            count: state.count - 1,
          }
        case 'SET_COUNT':
          return {
            ...state,
            count: action.payload.count,
          }
        case 'RESET':
          return { ...initialState }

        default: {
          throw new Error(`Unknown action ${action}`)
        }
      }
    }

    const reducerMock = jest.fn(reducer)

    const {
      useContextState: useCounterState,
      useDispatch: useCounterDispatch,
      StateDispatchProvider,
    } = createStateDispatchContext({ reducer: reducerMock })
    // export { StateDispatchProvider, useCounterState, useCounterDispatch }

    function Counter() {
      const { count } = useCounterState()
      const { dispatch } = useCounterDispatch()
      return (
        <div>
          <div onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</div>
          <div onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</div>
          <div onClick={() => dispatch({ type: 'RESET' })}>Reset</div>
          <div
            onClick={() =>
              dispatch({ type: 'SET_COUNT', payload: { count: 99 } })
            }
          >
            Set count
          </div>
          <div data-testid="count">{count}</div>
        </div>
      )
    }

    function CounterFollow() {
      const { count } = useCounterState()
      return <div data-testid="countFollow">{count}</div>
    }

    function App() {
      return (
        <div>
          <StateDispatchProvider initialState={initialState}>
            <Counter />
            <CounterFollow />
          </StateDispatchProvider>
        </div>
      )
    }

    const { getByText, getByTestId } = render(<App />)

    expect(getByTestId('count')).toHaveTextContent('0')

    fireEvent.click(getByText('Increment'))
    expect(getByTestId('count')).toHaveTextContent('1')
    expect(getByTestId('countFollow')).toHaveTextContent('1')

    fireEvent.click(getByText('Increment'))
    expect(getByTestId('count')).toHaveTextContent('2')

    fireEvent.click(getByText('Decrement'))
    expect(getByTestId('count')).toHaveTextContent('1')

    fireEvent.click(getByText('Set count'))
    expect(getByTestId('count')).toHaveTextContent('99')
    expect(getByTestId('countFollow')).toHaveTextContent('99')

    fireEvent.click(getByText('Reset'))
    expect(getByTestId('count')).toHaveTextContent('0')

    expect(reducerMock).toBeCalledTimes(5)
  })
})
