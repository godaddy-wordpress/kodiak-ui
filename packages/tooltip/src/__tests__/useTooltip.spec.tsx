import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Box, Button } from '@kodiak-ui/primitives'
import { Tooltip, TooltipArrow, useTooltip } from '../'

export function Example() {
  const { isVisible, register, getTriggerProps, Portal } = useTooltip({
    placement: 'right',
  })

  return (
    <Box sx={{ margin: '25%' }}>
      <Button
        ref={node => register(node, { trigger: true })}
        {...getTriggerProps()}
      >
        Hover over me
      </Button>
      {isVisible && (
        <Portal>
          <Tooltip ref={register}>
            This domain has failed verification.
            <TooltipArrow
              ref={(node: HTMLElement) => register(node, { arrow: true })}
            />
          </Tooltip>
        </Portal>
      )}
    </Box>
  )
}

describe('useTooltip', () => {
  it('should render and display the tooltip on hover', () => {
    const { getByText, queryByText } = render(<Example />)

    const trigger = getByText('Hover over me')
    const tooltip = queryByText('This domain has failed verification.')
    expect(trigger).toBeDefined()
    expect(tooltip).toBeNull()

    fireEvent(trigger, new MouseEvent('mouseenter'))
    expect(tooltip).toBeDefined()

    fireEvent(trigger, new MouseEvent('mouseout'))
    expect(tooltip).toBeNull()

    fireEvent.focus(trigger)
    expect(tooltip).toBeDefined()

    fireEvent.keyUp(trigger, { key: 'Escape', code: 'Escape' })
    expect(tooltip).toBeNull()

    fireEvent.focus(trigger)
    expect(tooltip).toBeDefined()

    fireEvent.blur(trigger)
    expect(tooltip).toBeNull()
  })
})
