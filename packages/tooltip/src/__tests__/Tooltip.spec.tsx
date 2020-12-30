import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Tooltip } from '../Tooltip'

expect.addSnapshotSerializer(serializer)

describe('Tooltip', () => {
  it('should render the Tooltip as a div element', () => {
    expect(renderer.create(<Tooltip>Tooltip message</Tooltip>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: white;
        border: 1px solid;
        border-color: muted;
        border-radius: default;
        max-width: 250px;
        padding: 8px;
        z-index: 9999;
      }

      .emotion-0[data-popper-placement^='top'] > #kodiak-ui-tooltip-arrow {
        bottom: -5px;
      }

      .emotion-0[data-popper-placement^='bottom'] > #kodiak-ui-tooltip-arrow {
        top: -5px;
      }

      .emotion-0[data-popper-placement^='left'] > #kodiak-ui-tooltip-arrow {
        right: -5px;
      }

      .emotion-0[data-popper-placement^='right'] > #kodiak-ui-tooltip-arrow {
        left: -5px;
      }

      .emotion-0[data-popper-placement^='top'] > #kodiak-ui-tooltip-arrow::before {
        border-right: 1px solid;
        border-bottom: 1px solid;
        border-color: muted;
      }

      .emotion-0[data-popper-placement^='bottom'] > #kodiak-ui-tooltip-arrow::before {
        border-left: 1px solid;
        border-top: 1px solid;
        border-color: muted;
      }

      .emotion-0[data-popper-placement^='left'] > #kodiak-ui-tooltip-arrow::before {
        border-right: 1px solid;
        border-top: 1px solid;
        border-color: muted;
      }

      .emotion-0[data-popper-placement^='right'] > #kodiak-ui-tooltip-arrow::before {
        border-left: 1px solid;
        border-bottom: 1px solid;
        border-color: muted;
      }

      <div
        className="emotion-0"
        tabIndex={-1}
      >
        Tooltip message
      </div>
    `)
  })
})
