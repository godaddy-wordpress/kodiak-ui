import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { VisuallyHidden } from '../VisuallyHidden'

describe('VisuallyHidden', () => {
  it('should render the VisuallyHidden component with the appropriate styling to hide the text', () => {
    expect(
      renderer
        .create(<VisuallyHidden>This text will be hidden</VisuallyHidden>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        word-wrap: normal;
      }

      <span
        className="emotion-0"
      >
        This text will be hidden
      </span>
    `)
  })
})
