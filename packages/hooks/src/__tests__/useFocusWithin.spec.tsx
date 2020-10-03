import * as React from 'react'
import { render } from '@testing-library/react'
import { useFocusWithin } from '..'

function Test({
  onFocus,
  onBlur,
  children,
}: {
  onFocus: (e: React.FocusEvent) => void
  onBlur: (e: React.FocusEvent) => void
  children?: React.ReactNode
}) {
  const { getFocusProps } = useFocusWithin({ onFocus, onBlur })
  return (
    <div tabIndex={-1} {...getFocusProps()} data-testid="test">
      {children}
    </div>
  )
}

describe('useFocusWithin', () => {
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

  it('should handle focus and blur events on children', () => {
    const events = []
    const addEvent = ({ type }) => events.push({ type })

    const component = render(
      <Test onFocus={addEvent} onBlur={addEvent}>
        <div data-testid="child" tabIndex={1} />
      </Test>,
    )

    const el = component.getByTestId('test')
    const child = component.getByTestId('child')
    el.focus()
    child.focus()
    child.blur()

    expect(events).toEqual([{ type: 'focus' }, { type: 'blur' }])
  })
})
