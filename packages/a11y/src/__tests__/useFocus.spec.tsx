import * as React from 'react'
import { render } from '@testing-library/react'
import { useFocus } from '../useFocus'

function Test({
  onFocus,
  onBlur,
  children,
}: {
  onFocus: (e: React.FocusEvent) => void
  onBlur: (e: React.FocusEvent) => void
  children?: React.ReactNode
}) {
  const { getFocusProps } = useFocus({ onFocus, onBlur })
  return (
    <div tabIndex={-1} {...getFocusProps()} data-testid="test">
      {children}
    </div>
  )
}

describe.skip('useFocus', () => {
  it('should accept and handle onFocus and onBlur events', () => {
    const events = []
    const addEvent = ({ type, target }) => events.push({ type, target })

    const component = render(<Test onFocus={addEvent} onBlur={addEvent} />)

    const el = component.getByTestId('test')
    el.focus()
    el.blur()

    expect(events).toEqual([
      { type: 'focus', target: el },
      { type: 'blur', target: el },
    ])
  })
})
