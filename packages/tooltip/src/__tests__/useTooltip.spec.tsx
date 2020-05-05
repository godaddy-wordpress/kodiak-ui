import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Box, Button } from '@kodiak-ui/primitives'
import { Tooltip, TooltipArrow, useTooltip } from '../'

export function Example() {
  const {
    isVisible,
    register,
    getTriggerProps,
    getTooltipProps,
    getArrowProps,
    Portal,
  } = useTooltip({ placement: 'right' })

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
          <Tooltip ref={register} {...getTooltipProps()}>
            This domain has failed verification.
            <TooltipArrow
              ref={(node: HTMLElement) => register(node, { arrow: true })}
              {...getArrowProps()}
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
  })
})
