import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Svg } from '..'

expect.addSnapshotSerializer(serializer)

describe('Svg', () => {
  it('should render the as an svg element', () => {
    expect(
      renderer
        .create(
          <Svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </Svg>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        display: block;
      }

      <svg
        className="emotion-0"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,0 100,0 50,100 0,100"
        />
      </svg>
    `)
  })
})
