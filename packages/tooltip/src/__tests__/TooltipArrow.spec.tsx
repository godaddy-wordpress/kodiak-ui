import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TooltipArrow } from '../TooltipArrow'

describe('Tooltip', () => {
  it('should render the TooltipArrow as a div element', () => {
    expect(renderer.create(<TooltipArrow />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: -1;
      }

      .emotion-0::before {
        background-color: white;
        content: '';
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: -1;
      }

      <div
        className="emotion-0"
        data-popper-arrow={true}
        id="kodiak-ui-tooltip-arrow"
      />
    `)
  })
})
