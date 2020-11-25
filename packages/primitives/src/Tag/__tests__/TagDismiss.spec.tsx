import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TagDismiss } from '..'

describe('TagDismiss', () => {
  it('should render the TagDismiss component as a span', () => {
    expect(
      renderer
        .create(
          <TagDismiss icon={null} onDismiss={() => alert('testing')}>
            Label
          </TagDismiss>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-2 {
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
        padding: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border: none;
        color: text;
        font-size: 14px;
        line-height: 1.2;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        border-right: 1px solid;
        border-color: muted;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        border-radius: default;
        background-color: muted;
        color: text;
        font-size: 14px;
        line-height: 1;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
      }

      <div
        className="emotion-2"
      >
        <span
          className="emotion-0"
        >
          Label
        </span>
        <button
          className="emotion-1"
          onClick={[Function]}
        />
      </div>
    `)
  })
})
