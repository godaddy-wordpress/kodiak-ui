import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { SvgIcon } from '..'

expect.addSnapshotSerializer(serializer)

describe('Svg', () => {
  it('should render the svg with title and desc', () => {
    expect(
      renderer
        .create(
          <SvgIcon
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            title="Sample poly"
            desc="Sample description of the poly"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </SvgIcon>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        fill: currentColor;
        color: black;
      }

      <svg
        className="emotion-0"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <title>
          Sample poly
        </title>
        <desc>
          Sample description of the poly
        </desc>
        <polygon
          points="50,0 100,0 50,100 0,100"
        />
      </svg>
    `)
  })
})
