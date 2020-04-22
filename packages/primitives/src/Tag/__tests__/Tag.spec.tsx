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
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: muted;
        border-radius: default;
        color: text;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-size: 14px;
        line-height: 1.2;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
      }

      <div
        className="emotion-0"
      >
        Label
      </div>
    `)
  })
})
