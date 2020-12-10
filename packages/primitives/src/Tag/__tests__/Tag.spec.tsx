import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Tag } from '..'

expect.addSnapshotSerializer(serializer)

describe('Tag', () => {
  it('should render the Tag component', () => {
    expect(renderer.create(<Tag>Label</Tag>).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-0"
      >
        Label
      </div>
    `)
  })
})
