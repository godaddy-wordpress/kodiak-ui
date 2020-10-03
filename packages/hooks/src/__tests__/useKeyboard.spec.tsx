import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { useKeyboard } from '..'

function Test({
  onKeyDown,
  onKeyUp,
  children,
}: {
  onKeyDown: (e: React.KeyboardEvent) => void
  onKeyUp: (e: React.KeyboardEvent) => void
  children?: React.ReactNode
}) {
  const { getKeyboardProps } = useKeyboard({ onKeyDown, onKeyUp })
  return (
    <div tabIndex={-1} {...getKeyboardProps()} data-testid="test">
      {children}
    </div>
  )
}

describe('useKeyboard', () => {
  it('should accept and handle keyup and keydown events', () => {
    const events = []
    const addEvent = ({ type, target }) => events.push({ type, target })

    const component = render(<Test onKeyDown={addEvent} onKeyUp={addEvent} />)

    const el = component.getByTestId('test')
    fireEvent.keyDown(el, { key: 'A' })
    fireEvent.keyUp(el, { key: 'A' })

    expect(events).toEqual([
      { type: 'keydown', target: el },
      { type: 'keyup', target: el },
    ])
  })
})
